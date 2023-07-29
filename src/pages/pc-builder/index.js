import RootLayout from "@/components/Layouts/RootLayouts";

const PcBuilder = () => {
  return <div>this is pc builder</div>;
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
