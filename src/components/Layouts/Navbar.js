import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-base-100 flex justify-between top-0 z-10 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/pc-builder">PC Builder</Link>
            </li>
            <li className="z-10">
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href="/processor">Processor</Link>
                </li>
                <li>
                  <Link href="/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/powersupply">Power-Supply</Link>
                </li>
                <li>
                  <Link href="/storage">Storage Device</Link>
                </li>
                <li>
                  <Link href="/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/others">Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl">
            Tech 2 Check
          </button>
        </Link>
      </div>
      <div className="mr-10 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:flex justify-between">
          <li>
            <Link href="/pc-builder">PC Builder</Link>
          </li>

          <li className="z-10" tabIndex={0}>
            <details>
              <summary className="px-8">Categories</summary>
              <ul className="p-4 ">
                <li>
                  <Link href="/processor">Processor</Link>
                </li>
                <li>
                  <Link href="/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/powersupply">Power-Supply</Link>
                </li>
                <li>
                  <Link href="/storage">Storage Device</Link>
                </li>
                <li>
                  <Link href="/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {session?.user ? (
        <>
          <button
            className="btn btn-error normal-case "
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </>
      ) : (
        <Link href="/login">
          <button className="btn btn-ghost normal-case ">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
