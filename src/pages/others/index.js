import RootLayout from "@/components/Layouts/RootLayouts";
import React from "react";

const Others = () => {
  return <div>This is Others</div>;
};

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
