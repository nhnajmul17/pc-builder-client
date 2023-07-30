import RootLayout from "@/components/Layouts/RootLayouts";
import Card from "@/components/UI/Card";

const RamPage = ({ data }) => {
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

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/api/items?category=ram`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
