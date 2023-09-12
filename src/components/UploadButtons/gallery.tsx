'use client'
import { CldUploadWidget } from 'next-cloudinary';

export const GalleryUpload = ()=>  <div className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4">
                            <CldUploadWidget uploadPreset="samples">
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
                                    }
                                }
                            </CldUploadWidget>
                        </div>