import { sanityClient } from "../lib/sanity";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import WorkHistory from "./components/workHistory";
import Education from "./components/education";
import AdditionalTrainings from "./components/additionalTrainings";
import BlockchainNFTBlock from "./components/blockchainNFTBlock";
const resumeQuery = `*[_type == 'resume'][0]{
  _id,
  user->,
  educations[]->,
  additionalTrainings[]->,
  workhistorys[]->,
}`;

function Resume({ resume }) {
  const { locale } = useRouter();

  const intl = useIntl();

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
    <div className="mb-0 bg-gray-800 border-gray-700 text-lg text-white text-bold text-center">
      <div className="italic">
        <div className="p-3 bg-gray-800 border-gray-700  text-4xl text-white text-bold text-center">
          {resume.user?.fullName}
        </div>
        <div className="p-1 bg-gray-800 border-gray-700  text-xl text-white text-bold text-center">
          {intl.formatMessage({ id: "page.resume.email" })}:
          <span className=" ml-1 font-medium subpixel-antialiased">
            {resume?.user?.email}
          </span>
        </div>
        <div className="p-2 bg-gray-800 border-gray-700  text-xl text-white text-bold text-center">
          {intl.formatMessage({ id: "page.resume.telephone" })}:
          <span className=" ml-1 font-medium subpixel-antialiased">
            {`+${resume?.user?.telephone}`}
          </span>
        </div>
        <div className="p-2 bg-gray-800 border-gray-700 text-3xl text-white text-bold text-center">
          {jobTitle}
        </div>
      </div>
      {/*Work Experience */}
      <div>
        <div className="mt-5 mb-5 ml-4 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {intl.formatMessage({ id: "page.resume.workHistory" })}
        </div>
        <div className="ml-2  grid lg:grid-cols-2 gap-5 md:grid-cols-1 sm:grid-cols-1 mt-5 mb-2 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {resume?.workhistorys?.map((workHistory, index) => {
            return (
              <WorkHistory
                workHistory={workHistory}
                key={index}
                locale={locale}
              />
            );
          })}
        </div>
      </div>
      {/* Education and aditional Trainings */}
      <div className="mb-0">
        <div className="mt-5 mb-5 ml-4 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {intl.formatMessage({ id: "page.resume.educationAndTrainings" })}
        </div>
        <div className="mt-5 mb-0 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {resume?.educations?.map((education, index) => {
            return (
              <Education education={education} key={index} locale={locale} />
            );
          })}
          {resume?.additionalTrainings?.map((additionalTraining, index) => {
            return (
              <AdditionalTrainings
                additionalTraining={additionalTraining}
                key={index}
                locale={locale}
              />
            );
          })}
          <BlockchainNFTBlock user={resume?.user} />

        </div>
      </div>
    </div>
  );
}

export default Resume;

//export async function getStaticPaths() {}

export async function getStaticProps() {
  const resume = await sanityClient.fetch(resumeQuery);
  const user = resume.user;
  return { props: { resume, user } };
}
