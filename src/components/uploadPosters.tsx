'use client'

import { CldUploadWidget } from 'next-cloudinary';
 
const UploadPosters = ()=> <CldUploadWidget uploadPreset="tb_test">
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

export default UploadPosters