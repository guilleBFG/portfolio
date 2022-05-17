import Head from "next/head";
import Herobutton from "../components/herobutton";
import { sanityClient } from "../lib/sanity";

const userQuery = `*[_type == 'user'][0]`;
export default function Home({ user }) {
  return (
    <div>
      <Head>
        <title>Guillermo Wester Portfolio</title>
        <meta
          name="description"
          content="Portfolio of projects CV and letter of presentation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herobutton {...user}/>
    </div>
  );
}

export async function getStaticProps() {
  const user = await sanityClient.fetch(userQuery);
  return { props: { user } };
}
