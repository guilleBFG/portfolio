import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { sanityClient, urlFor } from "../lib/sanity.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
