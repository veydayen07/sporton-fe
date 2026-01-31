import React from "react";
import { FiUploadCloud } from "react-icons/fi";

const FileUploads = () => {
  return (
    <div className="border-dashed border border-primary bg-primary/10 w-full min-h-29 flex flex-col justify-center items-center gap-1">
      <FiUploadCloud size={24} strokeWidth={2} className="text-primary" />
      <span className="text-black text-xs">
        Upload Your Payment Receipt here
      </span>
    </div>
  );
};

export default FileUploads;
