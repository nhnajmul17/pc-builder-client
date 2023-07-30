import RootLayout from "@/components/Layouts/RootLayouts";
import Image from "next/image";

const ProductDetails = ({ data }) => {
  const { data: product } = data;
  return (
    <div className="p-5 mt-[5rem] ">
      <div className=" flex flex-col justify-between space-y-8 md:space-y-0 md:flex-row md:space-x-4 ">
        <div className=" flex-1 h-full  flex justify-center items-center ">
          <Image
            src={product?.image}
            alt={product?.productName}
            width="400"
            height="300"
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className=" flex-1 ">
          <div>
            <h2 className=" md:text-left text-[2rem] text-center font-bold text-blue-300 uppercase tracking-wider ">
              {product?.productName}
            </h2>
            <p className=" text-center md:text-left border-y-2 py-4 items-center ">
              Category: {product?.category}
            </p>
          </div>
          <h1 className=" text-center font-bold md:text-left">
            Status: {product?.status}
          </h1>
          <div className=" text-center md:text-left border-y-2 py-4 items-center ">
            <span className="  "> Price: ${product?.price}</span>
          </div>
          <div className=" text-center md:text-left border-y-2 py-4 items-center ">
            <span className="  "> Key-Features: {product?.keyFeatures}</span>
          </div>
          <div className=" text-center md:text-left border-y-2 py-4 items-center ">
            <span className="  "> Description: {product?.description}</span>
          </div>
          <div className=" text-center md:text-left border-y-2 py-4 items-center ">
            <span className="  "> Individual Rating: {product?.rating}</span>
          </div>
          <div className=" text-center md:text-left border-y-2 py-4 items-center ">
            <span className="  ">
              {" "}
              Average Rating: {product?.averageRating}
            </span>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-2xl mb-2">Reviews</h3>
            {product?.reviews?.map((review, index) => (
              <div key={index} className="flex gap-3 items-center mb-5 ">
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      width={100}
                      height={100}
                      alt="user"
                      src="https://github.com/euotiniel.png"
                    />
                  </div>
                </label>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/items`);
  const { data: product } = await res.json();

  const paths = product.map((product) => ({
    params: { productDetails: product._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/${params.productDetails}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
