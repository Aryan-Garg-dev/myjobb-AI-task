"use client";

import React, { useRef } from "react";
import { InteractiveHoverButton } from "@/components/buttons/interactive-button";

const UploadResume = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileRef.current?.click();
  };

  return (
    <div className={"w-full h-40 flex-center bg-gray-50 p-4"}>
      <input
        type={"file"}
        className={"hidden"}
        accept={".pdf,.txt,.docx"}
        multiple={false}
        ref={fileRef}
      />
      <InteractiveHoverButton
        text={"Resume"}
        afterText={"Upload"}
        onClick={handleClick}
      />
    </div>
  );
};
export default UploadResume;
