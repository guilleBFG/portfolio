/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { sanityClient, urlFor } from "../lib/sanity.js";
import PortableText from "react-portable-text";

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
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          class="w-24 h-24 rounded-full mx-auto"
          width={150}
          height={150}
          src={urlFor(user.profilePicture).url()}
          alt="Profile Picture"
        />
        <div class="pt-6 md:p-10 text-center md:text-left space-y-4 text-teal-600">
          <blockquote>
            <PortableText
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              content={user.introduction}
              className=""
              serializers={{
                h1:  props => <h1  {...props} />,
                h2:  props => <h1  {...props} />
              }}
            />
          </blockquote>
        </div>
      </figure>
    </div>
  );
}

export async function getStaticProps() {
  const user = await sanityClient.fetch(userQuery);
  return { props: { user } };
}
