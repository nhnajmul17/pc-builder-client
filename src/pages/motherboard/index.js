import RootLayout from "@/components/Layouts/RootLayouts";
import Card from "@/components/UI/Card";

const MotherboardPage = ({ data }) => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((product) => (
          <Card product={product} key={product._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-tawny.vercel.app/api/items?category=motherboard"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
