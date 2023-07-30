import Link from "next/link";

const Features = () => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl text-center my-14">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/motherboard">
            <h2 className="text-2xl mt-[-8px]">Mother Board</h2>
          </Link>
        </div>
        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/processor">
            <h2 className="text-2xl mt-[-8px]">Processor</h2>
          </Link>
        </div>
        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/ram">
            <h2 className="text-2xl mt-[-15px]">Ram</h2>
          </Link>
        </div>
        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/monitor">
            <h2 className="text-2xl mt-[-8px]">Monitor</h2>
          </Link>
        </div>

        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/powersupply">
            <h2 className="text-2xl mt-[-8px]">Power Supply</h2>
          </Link>
        </div>
        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/storage">
            <h2 className="text-2xl mt-[-8px]">Storage</h2>
          </Link>
        </div>
        <div className="w-[200px] flex items-center flex-col shadow-2xl rounded-lg pb-2 ">
          <Link href="/others">
            <h2 className="text-2xl mt-[-8px]">Others</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
