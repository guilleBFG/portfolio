import Head from "next/head";
import { useIntl } from "react-intl";
import Herobutton from "../components/Herobutton";
import BlockchainNFTBlock from "../components/BlockchainNFTBlock";
import { sanityClient } from "../lib/sanity";
const userQuery = `*[_type == 'user'][0]`;
export default function Home({ user  }) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <div className="bg-gray-800 border-gray-700">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="/" hrefLang="x-default" />
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/es" hrefLang="fr" />
      </Head>
      <Herobutton user={user} key="heroButton"/>
      <BlockchainNFTBlock user={user} />
    </div>
  );
}

export async function getStaticProps() {
  const user = await sanityClient.fetch(userQuery);
  return { props: { user }, revalidate: 300, };
}
