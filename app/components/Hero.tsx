"use client";
import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import MyPic from "../../public/assets/me.jpg";
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TypewriterEffect } from './ui/typewriter-effect';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX
} from "@tabler/icons-react";
import { FloatingDock } from './ui/floating-dock';



const Hero  = () => {
  const words = [
    { text: "Hi", className: "text-3xl" },
    { text: "this", className: "text-3xl" },
    { text: "is", className: "text-3xl" },
    { text: "Soumyadip", className: "text-3xl" },
    { text: "Dey.", className: "text-3xl text-blue-500 lg:text-4xl dark:text-blue-500" },
  ];

  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/soumyadip-dey-01782a251/",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Realsoumyadey",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/realsoumyadey07",
    },
  ];

  return (
    <div id="Hero">
    <div  className='w-[95%] lg:w-[92%] m-auto min-h-screen flex flex-col justify-between'>
      <div className='flex flex-col justify-between items-center py-5 px-3 flex-grow'>
        <div className='lg:w-[394px] h-auto'>
          <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
            <Image
              src={MyPic}
              alt='my picture'
              className='w-full h-auto rounded-[22px]'
            />
          </BackgroundGradient>
        </div>
        <div className='text-center mt-10 mb-8 lg:mb-0  flex-grow'>
          <TypewriterEffect words={words} />
          <TextGenerateEffect  className='mt-5 text-sm' words='I am a passionate React Developer from India, currently pursuing final year of BCA from Maulana Abul Kalam Azad University of Technology.Full Stack Developer with a strong focus on modern web technologies, including React, Next.js, TypeScript, Node.js, JavaScript, and MongoDB. Passionate about building scalable, high-performance web applications with a deep understanding of front-end and back-end development. Eager to contribute to dynamic teams and continuously enhance skills in full stack development.' />

          <div className='my-7'>
            <Link href={"/projects"} >
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Go to Projects
                </span>
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
