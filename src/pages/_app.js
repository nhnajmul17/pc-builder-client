import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    // <div theme-data="light">
    <Component {...pageProps} />
    // </div>
  );
}
