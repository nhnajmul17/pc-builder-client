import RootLayout from "@/components/Layouts/RootLayouts";

const Ram = () => {
  return <div>This is Ram</div>;
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
