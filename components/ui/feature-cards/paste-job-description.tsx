import React from "react";

const PasteJobDescription = () => {
  return (
    <div className={"w-full h-40 flex-center bg-base-200 p-4"}>
      <textarea
        className={
          "border border-black border-dashed bg-base-100 min-w-56 max-h-32 caret-blue-600 outline-none p-2 text-sm placeholder:text-sm resize-none"
        }
        placeholder={"Enter Job deascription"}
      />
    </div>
  );
};
export default PasteJobDescription;
