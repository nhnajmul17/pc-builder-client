import RootLayout from "@/components/Layouts/RootLayouts";

const Processor = () => {
  return <div>This is Processor</div>;
};

export default Processor;
Processor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
