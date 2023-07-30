import RootLayout from "@/components/Layouts/RootLayouts";
import ProductCard from "@/components/UI/ProductCard";

const Others = ({ data }) => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Others;
Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/items?category=others");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
