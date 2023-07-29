import RootLayout from "@/components/Layouts/RootLayouts";

const PcBuilder = () => {
  return <div>This is Builder Pc</div>;
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
