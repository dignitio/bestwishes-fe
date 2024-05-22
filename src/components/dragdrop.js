import React, { useRef, useState } from "react";

const Dragdrop = ({images, setImages}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
 

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  
    const files = Array.from(e.dataTransfer.files);
  
    // Check if each dropped file is an image
    const nonImageFiles = files.filter((file) => !file.type.startsWith("image/"));
    if (nonImageFiles.length > 0) {
      // Handle non-image files (e.g., throw an error)
      alert("Only image files are allowed.");
      // Or handle non-image files differently, e.g., ignore them or display an error message
      // return;
    }
  
    // All dropped files are images, add them to the state
    setImages([...images, ...files])
    // console.log("Updated images:", images);
  };
  // console.log(images)

  
  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };
  
  const handleFileInputChange = ({ target: { files } }) => {
    // Handle the selected files when using the file input
    
    // Convert FileList to an array and add it to the existing images state
    const fileList = Array.from(files);
    setImages([...images, ...fileList]);
  };
  
  return (
    <div
      className={`flex justify-center items-center border-dashed border  ${
        isDragOver ? "border-[#4CAF50]" : "border-[#E5E7EB]"
      } p-10 w-full bg-[#FAFAFB] rounded-[8px] flex-col gap-[5px]`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
     
    >
      <p className="font-[500] text-[12px] md:text-[16px] text-[#1F2937] whitespace-nowrap">
        {isDragOver ? "Drop your files here" : "Drag your files here or "}
        {!isDragOver && <span className="text-primary font-semibold cursor-pointer hover:underline "  onClick={handleBrowseClick}>browse</span>}
      </p>
      <p className="font-[400] text-[12px] md:text-[14px] text-[#9CA3AF] whitespace-nowrap">Maximum size: 10MB</p>
      {/* Invisible file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple
        accept="image/*"
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default Dragdrop;
