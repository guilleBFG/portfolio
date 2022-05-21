import Head from "next/head";
import { sanityClient } from "../lib/sanity";
import { useIntl } from "react-intl";
import Herobutton from "../components/herobutton";
import BlockchainNFTBlock from "../components/blockchainNFTBlock";
import Navbar from "../components/Navbar";

const userQuery = `*[_type == 'user'][0]`;
export default function Home({ user }) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="/" hrefLang="x-default" />
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/es" hrefLang="fr" />
      </Head>
      <Herobutton user={user} />
      <BlockchainNFTBlock user={user} />
    </div>
  );
}

export async function getStaticProps() {
  const user = await sanityClient.fetch(userQuery);
  return { props: { user } };
}
