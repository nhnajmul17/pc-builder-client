import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen px-7 pt-10">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
