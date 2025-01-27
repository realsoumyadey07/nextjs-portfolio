"use client";
import React from 'react';
import Image from 'next/image';
import { BackgroundGradient } from './ui/background-gradient';
import { FaArrowRightLong } from 'react-icons/fa6';
import { images } from '../constants';
import Link from 'next/link';

const projectData = [
  {
    title: "Curepulse",
    description:
      "Curepulse is a healthcare management web application using Nextjs, Appwrite cloud.",
    image: images.projectFirstImage,
    projectLink: "https://curepulse-nextjs.vercel.app/",
  },
  {
    title: "MERN - Chat Application",
    description:
      "A Fullstack MERN stack Chat Application for messages, file sharing and video calls using nextjs, tailwindCss redux, redis, express and mongodb.",
    image: images.projectSecondImage,
    projectLink: "https://github.com/realsoumyadey07/MERN-Chat-App",
  },
  {
    title: "Aora - a video streaming mobile app",
    description:
      "A video streaming mobile app using React Native, appwrite cloud, nativewind",
    image: images.projectThirdImage,
    projectLink: "https://github.com/realsoumyadey07/Aora-react-native",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="py-10">
      <div className="w-[95%] lg:w-[92%] mx-auto min-h-screen flex flex-col">
        <div className="grid gap-8 px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="w-full h-full flex flex-col items-center justify-between"
            >
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow-md flex flex-col justify-between">
                <Image
                  src={project.image}
                  alt={project.title}
                  height="240"
                  width="240"
                  className="object-contain rounded-md mx-auto"
                />
                <p className="text-lg font-semibold text-black mt-4 dark:text-neutral-200">
                  {project.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  {project.description}
                </p>

                <Link
                  href={project.projectLink}
                  className="rounded-full px-4 py-2 text-white flex items-center justify-center bg-black mt-4 text-xs font-bold dark:bg-zinc-800 hover:scale-105 transition-all"
                >
                  <span>Link </span>
                  <FaArrowRightLong className="ml-2 text-sm" />
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
