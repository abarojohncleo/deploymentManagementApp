import React from "react";

const PageContent = ({children}) => {
  return (
    <div className="border border-black border-solid rounded-md p-5 mt-10 max-h-full">
      {children}
    </div>
  )
};

export default PageContent;