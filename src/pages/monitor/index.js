import RootLayout from "@/components/Layouts/RootLayouts";
import Card from "@/components/UI/Card";

const MonitorPage = ({ data }) => {
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

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       data: [],
  //     },
  //   };
  // }
  // const res = await fetch(`http://localhost:3000/api/items?category=monitor`);
  const res = await fetch(`${process.env.URL}/api/items?category=monitor`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
