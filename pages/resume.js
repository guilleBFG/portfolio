import React from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import Image from "next/image";
import PortableText from "react-portable-text";
import { useRouter } from "next/router";

const resumeQuery = `*[_type == 'resume'][0]{
  _id,
  user->,
  educations[]->,
  additionalTrainings[]->,
  workhistorys[]->,
}`;


function Resume({ resume }) {
  const { locale } = useRouter();
  let jobTitle = "";
  switch (locale) {
    case "es":
      jobTitle = resume?.user?.jobTitle.es;
      break;
    case "en":
      jobTitle = resume?.user?.jobTitle.en;
      break;
    case "pt":
      jobTitle = resume?.user?.jobTitle.pt;
      break;
    default:
      jobTitle = resume?.user?.jobTitle.en;
      break;
  }

  return (
    <div className="bg-gray-800 border-gray-700 text-lg text-white text-bold text-center">
      <div className="bg-gray-800 border-gray-700 text-lg text-white text-bold text-center">
        {resume.user?.fullName}
      </div>
      <div className="italic bg-gray-800 border-gray-700 text-base text-white text-bold text-center">
        {jobTitle}
      </div>
    </div>
  );
}

export default Resume;

//export async function getStaticPaths() {}

export async function getStaticProps() {
  const resume = await sanityClient.fetch(resumeQuery);
  const  user  = resume.user;
  return { props: { resume, user } };
}
