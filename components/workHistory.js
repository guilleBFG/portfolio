import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";
import {  urlFor } from "../lib/sanity";
import moment from "moment";
function WorkHistory({ workHistory, locale }) {
  let jobTitle = "";
  let jobDescription = "";
  switch (locale) {
    case "es":
      jobTitle = workHistory?.jobTitle?.es;
      jobDescription = workHistory?.jobDescription?.es;
      break;
    case "en":
      jobTitle = workHistory?.jobTitle?.en;
      jobDescription = workHistory?.jobDescription?.en;
      break;
    case "pt":
      jobTitle = workHistory?.jobTitle?.pt;
      jobDescription = workHistory?.jobDescription?.pt;
      break;
    default:
      jobTitle = workHistory?.jobTitle?.en;
      jobDescription = workHistory?.jobDescription?.en;
      break;
  }
  return (
    <>
      <div className="p-3">
        <div className=" w-full lg:max-w-full lg:flex  rounded-xl">
          <Image
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover border rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            width={200}
            height={100}
            src={urlFor(workHistory.companyLogo).url()}
            alt="Company Logo"
          />
          <div className="  w-full  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="font-bold text-white text-xl mb-2">
                {`${jobTitle} ${moment(workHistory.fromDate).format("DD-MM-YYYY")}`}

              </div>
              <blockquote>
                <PortableText
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  content={jobDescription}
                  className="text-white text-base"
                  serializers={{
                    h1: (props) => <h1 {...props} />,
                    h2: (props) => <h1 {...props} />,
                  }}
                />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkHistory;
