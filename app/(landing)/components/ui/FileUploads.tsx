"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploads = {
  OnFileSelect?: (file: File | undefined) => void;
};

const FileUploads = ({ OnFileSelect }: TFileUploads) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // useEffect(() => {
  //   console.log(fileInputRef.current?.files);
  // }, [fileInputRef]);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // const files = e.target.files;
  //   // if (!files || files.length === 0) {
  //   //   console.log("No file selected");
  //   //   return;
  //   // }

  //   // console.log(files[0]);

  // };

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;
    setFile(selectedFile);
    OnFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    fileInputRef.current!.value = "";
    setFile(undefined);
    OnFileSelect?.(undefined);
  };
  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files?.[0]);
      }}
      className="border-dashed border border-primary bg-primary/10 w-full min-h-29 flex items-center justify-center cursor-pointer py-6"
    >
      <input
        type="file"
        name=""
        id=""
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e.target.files?.[0])}
      />
      {file ? (
        <div className="flex flex-col justify-center items-center gap-4 ">
          <FiImage size={24} strokeWidth={2} className="text-primary" />
          <div className="flex flex-col gap-0.5 text-sm items-center">
            <span className=" text-primary">{file.name}</span>
            <span className="text-gray-400">
              {(file.size / 1024 / 1000).toFixed(1)} MB
            </span>
          </div>
          <button
            onClick={removeFile}
            className="flex justify-center items-center gap-2 px-2 py-0.5 bg-primary/90 font-medium text-white rounded-sm"
          >
            <FiTrash2 size={16} strokeWidth={2} /> Remove
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-1">
          <FiUploadCloud size={24} strokeWidth={2} className="text-primary" />
          <span className="text-black text-xs">
            Upload Your Payment Receipt here
          </span>
        </div>
      )}
    </div>
  );
};

export default FileUploads;
