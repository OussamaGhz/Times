import React from "react";
import CardC from "../ui/dashboard/card";
import PageContainer from "../ui/dashboard/page-container";

const DashboardPage = () => {
  return (
    <PageContainer>
      <div className="flex gap-7">
        {/* cards */}
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <CardC />
            <CardC />
          </div>
          <div className="flex gap-7">
            {" "}
            <CardC />
            <CardC />
          </div>
        </div>
        {/* table */}
        <div className="">
          <CardC />
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
