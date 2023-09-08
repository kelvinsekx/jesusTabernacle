import Image from "next/image";
import { Container } from "../container";
import UploadPosters from "../uploadPosters"
import cloudinary from "./../../lib/cloudinary"


const getPosters = async ()=> {
  let results = await cloudinary.v2.search
    .expression(`folder:jesusTabernacle/*`)
    .sort_by('public_id', 'desc')
    .max_results(3)
    .execute()

  let reducedResults: {src:string}[] = []
  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      src: result.secure_url
    })
    i++
  }

  return {
      images: reducedResults
  }
}
const Posters = async () => {
  const posters =  await getPosters()

 return  <div className="bg-[#FDFBF7]">
 <Container pad>
   <div>
     <div className="text-center">
       <div className="text-black text-4.5xl pb-2">
         Stay informed about our programs
       </div>
       <p className="text-tb-grey2 text-base" id="gallery">
         Be the First to Know About Exciting Events and Activities
       </p>
     </div>
     <Posters.Images posters={posters.images} />
   </div>
   <UploadPosters />
 </Container>
</div>
}

const PImages = ({posters}: {posters: {src: string}[]}) => {
  return (
    <div className="flex flex-wrap justify-between">
      {posters.map((poster, index) => (
        <div key={index} className="w-[30%] h-[450px] relative">
          <Image
            src={poster.src}
            fill
            alt=""
            className="object-fit object-contain"
          />
        </div>
      ))}
    </div>
  );
};
Posters.Images = PImages;

export default Posters;
