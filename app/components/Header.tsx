"use client"
import React, { FC, useEffect, useState } from 'react'
import ThemeSwitcher from '../utils/ThemeSwitcher';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import NavItems from './NavItems';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Link from 'next/link';

type Props = {}

const Header: FC<Props> = (props: Props) => {
     const [active, setActive] = useState(false);
     const [isSidebarOpen, setSidebarOpen] = useState(false);
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 80) {
                    setActive(true)
               } else {
                    setActive(false)
               }
          }
          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll)
          }
     }, [])
     const handleSidebarClose = (e: any) => {
          if (e.target.id === "screen") {
               setSidebarOpen(false);
          }
     }
     return (
          <div className='w-full relative'>
               <div className={`${active ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500" : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black"}`}>
                    <div className='w-[95%] 800px:w-[92%] m-auto py-2 h-full'>
                         <div className='w-full h-[80px] flex items-center justify-between p-3'>
                              <div className='flex h-full items-center justify-center'>
                                   <Link href={"/"}>
                                        <TextGenerateEffect words="Soumyadip Dey" />
                                   </Link>
                              </div>
                              <div className='flex items-center'>
                                   <NavItems />
                                   <ThemeSwitcher />
                                   <div className="lg:hidden">
                                        <HiOutlineMenuAlt3
                                             size={25}
                                             className="cursor-pointer dark:text-white text-black"
                                             onClick={() => setSidebarOpen(true)}
                                        />
                                   </div>
                              </div>

                         </div>
                    </div>
                    {
                         isSidebarOpen && (
                              <div id="screen"
                                   className="lg:hidden fixed w-full top-0 h-screen left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
                                   onClick={handleSidebarClose}
                              >
                                   <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 flex justify-center ">
                                        <NavItems isSidebarOpen={isSidebarOpen} />
                                   </div>
                              </div>
                         )
                    }
               </div>
          </div>
     )
}

export default Header