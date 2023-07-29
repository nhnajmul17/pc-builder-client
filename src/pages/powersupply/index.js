import RootLayout from "@/components/Layouts/RootLayouts";

const PowerSupply = () => {
  return <div>This is Power Supply</div>;
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
