import RootLayout from "@/components/Layouts/RootLayouts";
import { removeItem } from "@/redux/features/product/productSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuilder = () => {
  const dispatch = useDispatch();
  const { components } = useSelector((state) => state.product);

  const [buildButton, setBuildButton] = useState(false);

  const motherboardExist = components.find(
    (item) => item.category === "motherboard"
  );
  const processorExist = components.find(
    (item) => item.category === "processor"
  );
  const ramExist = components.find((item) => item.category === "ram");
  const powerSupplyExist = components.find(
    (item) => item.category === "powersupply"
  );
  const storageExist = components.find((item) => item.category === "storage");
  const monitorExist = components.find((item) => item.category === "monitor");

  const enableBuildBtn =
    motherboardExist &&
    processorExist &&
    ramExist &&
    powerSupplyExist &&
    storageExist &&
    monitorExist;

  const handleRemove = (product) => {
    dispatch(removeItem(product));
  };

  useEffect(() => {
    if (enableBuildBtn) {
      setBuildButton(true);
    } else {
      setBuildButton(false);
    }
  }, [enableBuildBtn]);

  return (
    <div className="my-10 mx-auto max-w-[900px] flex items-center justify-center flex-col ">
      <h2 className="text-2xl font-bold mb-10"> Select all the Components:</h2>
      <div className="flex w-full justify-between items-center">
        {motherboardExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={motherboardExist.productName}
                src={motherboardExist.image}
                height="100"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {motherboardExist?.productName}</p>
                <p className="ml-4">Price: ${motherboardExist?.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(motherboardExist)}
              className="btn btn-error"
            >
              X
            </button>
          </>
        ) : (
          <>
            <h2>Motherboard *</h2>
            <Link href="/motherboard">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {processorExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={processorExist.productName}
                src={processorExist.image}
                height="100"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {processorExist?.productName}</p>
                <p className="ml-4">Price: ${processorExist?.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(processorExist)}
              className="btn btn-error"
            >
              X
            </button>
          </>
        ) : (
          <>
            <h2>Processor *</h2>
            <Link href="/processor">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {ramExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={ramExist.productName}
                src={ramExist.image}
                height="100"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {ramExist?.productName}</p>
                <p className="ml-4">Price: ${ramExist?.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(ramExist)}
              className="btn btn-error"
            >
              X
            </button>
          </>
        ) : (
          <>
            <h2>Ram *</h2>
            <Link href="/ram">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {powerSupplyExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={powerSupplyExist.productName}
                src={powerSupplyExist.image}
                height="100"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {powerSupplyExist?.productName}</p>
                <p className="ml-4">Price: ${powerSupplyExist?.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(powerSupplyExist)}
              className="btn btn-error"
            >
              X
            </button>
          </>
        ) : (
          <>
            <h2>Power Supply *</h2>
            <Link href="/powersupply">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {storageExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={storageExist.productName}
                src={storageExist.image}
                height="100"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {storageExist?.productName}</p>
                <p className="ml-4">Price: ${storageExist?.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(storageExist)}
              className="btn btn-error"
            >
              X
            </button>
          </>
        ) : (
          <>
            <h2>Storage *</h2>
            <Link href="/storage">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {monitorExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={monitorExist.productName}
                src={monitorExist.image}
                height="100"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {monitorExist?.productName}</p>
                <p className="ml-4">Price: ${monitorExist?.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(monitorExist)}
              className="btn btn-error"
            >
              X
            </button>
          </>
        ) : (
          <>
            <h2>Monitor *</h2>
            <Link href="/monitor">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>

      <button
        onClick={() => toast.success("Your PC Build Successfully")}
        disabled={!buildButton}
        className="btn btn-success mt-10"
      >
        Complete Build
      </button>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
