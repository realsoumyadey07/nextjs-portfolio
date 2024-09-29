"use client"
import React from 'react'
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'
import { FaArrowRightLong } from 'react-icons/fa6';
import { images } from '../constants';
import Link from 'next/link';
import { TextGenerateEffect } from './ui/text-generate-effect';

const projectData = [
  {
    title: "Curepulse",
    description: "Curepulse is a healthcare management web application using Nextjs, Appwrite cloud.",
    image: images.projectFirstImage,
    projectLink: "https://curepulse-nextjs.vercel.app/"
  },
  {
    title: "LMS - Learning Management System",
    description: "A learning management system for selling and buying courses using nextjs, tailwindCss redux, redis, express and mongodb.",
    image: images.projectSecondImage,
    projectLink: "https://github.com/realsoumyadey07/LMS-backend-nodejs"
  },
  {
    title: "Aora - a video streaming mobile app",
    description: "A video streaming mobile app using React Native , appwrite cloud, nativewind",
    image: images.projectThirdImage,
    projectLink: "https://github.com/realsoumyadey07/Aora-react-native"
  },
]

const Projects = () => {
  return (
    <div id="Projects">
      <div className='w-[95%] lg:w-[92%] lg:flex-row m-auto min-h-screen flex flex-col justify-between container '>
        {
          projectData && projectData.map((i) => (
            <div className='lg:w-[394px] h-auto my-6'>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={i.image}
                  alt={i.title}
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {i.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {i.description}
                </p>
                
                <Link href={i.projectLink} className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 w-20 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Link </span>
                  <span className=" rounded-full text-[0.6rem] px-2 py-0 text-white">
                    <FaArrowRightLong />
                  </span>
                </Link>
              </BackgroundGradient>
            </div>
          ))
        }

        {/* <div className='lg:w-[394px] h-auto'>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/public/assets/project-1.png`}
              alt="curepulse"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Buy now </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          </BackgroundGradient>
        </div> */}
      </div>
    </div>
  )
}

export default Projects
