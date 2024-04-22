import React from "react";

interface MyProps {
  children?: React.ReactNode;
}

const PageContainer = ({ children }: MyProps) => {
  return (
    <div className="p-16">
      <div></div>
      {children}
    </div>
  );
};

export default PageContainer;
