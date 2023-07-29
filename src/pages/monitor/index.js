import RootLayout from "@/components/Layouts/RootLayouts";

const Monitor = () => {
  return <div>This is Monitor</div>;
};

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
