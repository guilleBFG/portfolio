import "../styles/globals.css";
import { Transition } from "@headlessui/react";
import { sanityClient, urlFor } from "../lib/sanity";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
