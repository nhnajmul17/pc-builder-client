import RootLayout from "@/components/Layouts/RootLayouts";

const MonitorPage = () => {
  return <div></div>;
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
