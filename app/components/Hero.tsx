"use client";
import Image from 'next/image';
import React from 'react';
import MyPic from "../../public/assets/me.jpg";
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
import { TextGenerateEffect } from './ui/text-generate-effect';


const Hero = () => {
  return (
    <div className='w-[95%] lg:w-[92%] m-auto h-screen'>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center px-3 py-5 h-auto lg:h-screen'>
        <div className='text-center lg:text-left mt-10 mb-8 lg:mb-0'>
          <TextGenerateEffect words='Hi, my name is Soumyadip Dey' />
          <TextGenerateEffect className='mt-5' words='I am a passionate React Developer from India' />

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
        </div>
        <div className='lg:w-[394px] h-auto'>
          <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
            <Image
              src={MyPic}
              alt='my picture'
              className='w-full h-auto rounded-[22px] '
            />
          </BackgroundGradient>
        </div>
      </div>

    </div>
  );
};

export default Hero;
