/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import Button from "components/Button";
import { ReactComponent as UploadIcon } from "../../assets/icons/picture-upload.svg";

const Uploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <main>
      <form
        className="relative flex flex-col justify-end items-start border-2 border-solid border-[#8593AD] rounded-lg h-[390px] w-auto cursor-pointer rounded-5 bg-white mt-1"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field absolute bottom-0 left-0 opacity-0"
          onChange={({ target: { files } }) => {
            if (files && files[0]) {
              setFileName(files[0].name);
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          <img src={image} width={350} height={350} alt={fileName} />
        ) : (
          <div className="absolute bottom-0 left-0 mb-4 ml-4 flex justify-center items-center">
            <UploadIcon size={60} />
            <p className="ml-2">Upload Cover Image</p>
          </div>
        )}
      </form>
    </main>
  );
};

export default Uploader;
