import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import PortableText from "react-portable-text";
import { useRouter } from "next/router";

function Herobutton({user}) {

  const { locale } = useRouter();
  let content='';
  switch (locale) {
    case "es":
      content = user?.introduction?.es;
      break;
    case "en":
      content = user?.introduction?.en;

      break;
    case "pt":
      content = user?.introduction?.pt;

      break;
    default:
      content = user?.introduction?.en;
      break;
  }

  return (
    <>
      <figure className="flex flex-wrap bg-gray-800 border-gray-700 p-8 md:p-0 bg-black-800 items-center">
        <div className="grid grid-cols-3 gap-4 ">
          <div></div>
          <div className="mx-auto">
            <Image
              className="mx-auto w-24 h-24 rounded-full"
              width={150}
              height={150}
              src={urlFor(user.profilePicture).url()}
              alt="Profile Picture"
            />
          </div>
          <div></div>
          <div></div>
          <div className="items-center pt-6 md:p-10 text-justify md:text-justify space-y-4 text-white">
            <blockquote>
              <PortableText
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                content={content}
                className=""
                serializers={{
                  h1: (props) => <h1 {...props} />,
                  h2: (props) => <h1 {...props} />,
                }}
              />
            </blockquote>
          </div>
        </div>
      </figure>      
    </>
  );
}

export default Herobutton;
