import { addItem } from "@/redux/features/product/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
    router.push("/pc-builder");
  };

  return (
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
        <p>{product?.description}.</p>
        <div>
          <p>
            <span className="font-bold">Price:</span> ${product?.price}
          </p>
          <p>
            {" "}
            <span className="font-bold">Category:</span> {product?.category}
          </p>
        </div>
        <div>
          <p>
            {" "}
            <span className="font-bold">Status:</span> {product?.status}
          </p>
          <p>
            {" "}
            <span className="font-bold">Rating: </span>
            {product?.rating}
          </p>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleAdd(product)}
            className="btn btn-primary"
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
