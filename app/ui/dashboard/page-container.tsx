import React from "react";

interface MyProps {
  children?: React.ReactNode;
}

const PageContainer = ({ children }: MyProps) => {
  return (
    <div className="p-14 flex justify-center items-center">
      
      {children}
    </div>
  );
};

export default PageContainer;
