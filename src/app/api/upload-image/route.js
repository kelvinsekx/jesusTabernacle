import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const POST = async (request) => {
  let missingPerson = [];

  const data = await request.formData();
  console.log(data);
  const file = data.get("photo");

  try {
    if (file) {
      // Read the file contents
      const fileBuffer = await file.arrayBuffer();

      var mime = file.type;
      var encoding = "base64";
      var base64Data = Buffer.from(fileBuffer).toString("base64");
      var fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

      // Upload the file to Cloudinary
      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          var result = cloudinary.uploader
            .upload(fileUri, {
              invalidate: true,
              folder: 'jesusTabernacle'
            })
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      };

      const result = await uploadToCloudinary();

      const person = {
        photo: result.secure_url,
      };
      return new NextResponse(JSON.stringify(person), { status: 200 });
    } else {
      console.log("No file selected")
      // Handle the case when no file is provided
      return new NextResponse( JSON.stringify({message: "No file was selected"}), {
        status: 500,
      });
    }
  } catch (err) {
    console.log(err)
    return new NextResponse(JSON.stringify({message:"Error in fetching resources "+ err.message}), {
      status: 500,
    });
  }
};
