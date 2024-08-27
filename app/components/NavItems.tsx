import Link from 'next/link'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

type NavbarItemsProp = {
  isSidebarOpen?: boolean
}


const NavItems = ({ isSidebarOpen }: NavbarItemsProp) => {
  return (
    <>
      <div className='hidden lg:flex items-center gap-[5rem] lg:mr-10'>
        <div >
          <Link href={"/"}>
            <TextGenerateEffect words='Home' />
          </Link>
        </div>
        <div>
          <Link href={"/about"}>
            <TextGenerateEffect words='About' />
          </Link>
        </div>
        <div>
          <Link href={"/projects"}>
            <TextGenerateEffect words='Projects' />
          </Link>
        </div>
        <div>
          <Link href={"/contact"}>
            <TextGenerateEffect words='Contact' />
          </Link>
        </div>
      </div>
      {isSidebarOpen && (
        <div className='lg:hidden h-[40%] flex flex-col justify-evenly items-center'>
          <div>
            <Link href={"/"}>
              <TextGenerateEffect words='Home' />
            </Link>
          </div>
          <div>
            <Link href={"/about"}>
              <TextGenerateEffect words='About' />
            </Link>
          </div>
          <div>
            <Link href={"/projects"}>
              <TextGenerateEffect words='Projects' />
            </Link>
          </div>
          <div>
            <Link href={"/contact"}>
              <TextGenerateEffect words='Contact' />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default NavItems
