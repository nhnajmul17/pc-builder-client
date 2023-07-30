import Head from "next/head";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layouts/RootLayouts";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="text-center items-center mt-20">
        <h3 className="font-bold text-xl">LOGIN</h3>
        <div className="mt-20">
          <button
            className="btn"
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-builder-tawny.vercel.app",
              })
            }
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
