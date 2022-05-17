import React from 'react'
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { sanityClient, urlFor } from "../lib/sanity";
import PortableText from "react-portable-text";

function Herobutton(user) {
    return (
        <figure className="flex flex-wrap bg-slate-100  p-8 md:p-0 dark:bg-blue-300 items-center">
            <div className='grid grid-rows-2  gap-4 '>
                <div className="mx-auto">
                    <Image
                        className="mx-auto w-24 h-24 rounded-full"
                        width={150}
                        height={150}
                        src={urlFor(user.profilePicture).url()}
                        alt="Profile Picture"
                    />
                </div>

                <div className=" items-center pt-6 md:p-10 text-center md:text-left space-y-4 text-white">
                    <blockquote>
                        <PortableText
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            content={user.introduction.en}
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
    )
}

export default Herobutton;