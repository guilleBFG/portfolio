import "../styles/globals.css";
import Link from "next/link";
import {sanityClient, urlFor} from '../lib/sanity';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="text-3xl font-bold ">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
