import RootLayout from "@/components/Layouts/RootLayouts";

const Storage = () => {
  return <div>This is Storage</div>;
};

export default Storage;

Storage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
