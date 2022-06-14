import Head from "next/head";
import { useIntl } from "react-intl";
import Herobutton from "../components/Herobutton";
import BlockchainNFTBlock from "../components/BlockchainNFTBlock";
import { sanityClient } from "../lib/sanity";
const userQuery = `*[_type == 'user'][0]`;
export default function Home({ user }) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <div className="bg-gray-800 border-gray-700 w-full h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="description"
          content="Check out my resume and work experience"
        />

        <meta itemProp="name" content="Guille's Resume" />
        <meta
          itemProp="description"
          content="Check out my resume and work experience"
        />
        <meta
          itemProp="image"
          content="/favicon.ico"
        />

        <meta property="og:url" content="https://www.gwester.com.ar/resume" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guille's Resume" />
        <meta
          property="og:description"
          content="Check out my resume and work experience"
        />
        <meta
          property="og:image"
          content="/favicon.ico"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guille's Resume" />
        <meta
          name="twitter:description"
          content="Check out my resume and work experience"
        />
        <meta
          name="twitter:image"
          content="/favicon.ico"
        />

        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="/" hrefLang="x-default" />
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/es" hrefLang="es" />
        <link rel="alternate" href="/pt" hrefLang="pt" />
      </Head>
      <Herobutton user={user} key="heroButton" />
      <BlockchainNFTBlock user={user} />
    </div>
  );
}

export async function getStaticProps() {
  const user = await sanityClient.fetch(userQuery);
  return { props: { user }, revalidate: 300 };
}
