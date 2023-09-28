'use client'

import { CldUploadWidget } from 'next-cloudinary';
 import { useAuth } from "@/lib/authContext";

const UploadPosters = ()=> {
  const { loggedIn } = useAuth();
  if(!loggedIn) return null
return <CldUploadWidget uploadPreset="tb_test">
{({ open }) => {
  function handleOnClick(e) {
    e.preventDefault();
    open();
  }
  return (
    <button className="button" onClick={handleOnClick}>
      Upload an Image
    </button>
  );
}}
</CldUploadWidget>
}

export default UploadPosters