import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <Link href={`/productDetails/${product._id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={product?.image}
            height="300"
            width="250"
            alt={product?.productName}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product?.productName}</h2>
          <div className="flex flex-row justify-center items-center">
            <p>
              <span className="font-bold">Price:</span> ${product?.price}
            </p>
            <p className="ms-5">
              <span className="font-bold">Category:</span> {product?.category}
            </p>
          </div>
          <div className="flex flex-row ">
            <p>
              <span className="font-bold">Status:</span> {product?.status}
            </p>
            <p className="ms-5">
              {" "}
              <span className="font-bold">Rating: </span>
              {product?.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
