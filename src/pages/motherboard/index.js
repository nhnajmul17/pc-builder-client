import RootLayout from "@/components/Layouts/RootLayouts";

const Motherboard = () => {
  return <div>This is Mother BoarD</div>;
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
