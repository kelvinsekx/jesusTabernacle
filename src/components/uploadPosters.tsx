"use client";
import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useAuth } from "@/lib/authContext";
import axios from "axios";

const formSchema = z.object({
  photo: z.any().refine(
    (files) => {
      return Array.from(files).every((file) => file instanceof File);
    },
    { message: "Expected a file" }
  ),
});

const UploadPosters = () => {
  const [servering, setServering] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();
  //  const { toast } = useToast();
  const { loggedIn } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      data.append(key, value);
    });

    setError(false);
    try {
      setServering(true);
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/upload-image",
        data
      );
      setSuccess(true);
    } catch (err) {
      console.log(err.response.data.message, err.message);
      const new_error = err.response.data.message || err.message;
      setError(new_error);
    }
    setServering(false);
    return;
  }

  if (!loggedIn) return null;
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:w-[70%] mx-auto"
        encType="multipart/form-data"
      >
        <FormField
          control={form.control}
          name="photo"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel className="text-3xl font-black">Add Photo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <p className="text-red-400 border-2 border-red-400 py-4">
            Opps, {error}.
          </p>
        )}
        {success && (
          <p className="text-teal-500 border-2 border-teal-500 py-4">
            Image upload successful, kindly reload this page.
          </p>
        )}
        <div className="flex justify-end">
          <Button type="submit">{servering ? "..." : "Create"}</Button>
        </div>
      </form>
    </Form>
  );
};

export default UploadPosters;
