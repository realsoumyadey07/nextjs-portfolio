import Link from 'next/link'
import React from 'react'

type NavbarItemsProp = {
  isSidebarOpen?: boolean
}


const NavItems = ({ isSidebarOpen }: NavbarItemsProp) => {
  return (
    <>
      <div className='hidden lg:flex items-center gap-[5rem] lg:mr-10'>
        <div >
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <Link href={"/about"}>About</Link>
        </div>
        <div>
          <Link href={"/projects"}>Projects</Link>
        </div>
        <div>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      {isSidebarOpen && (
        <div className='lg:hidden h-[40%] flex flex-col justify-evenly items-center'>
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/about"}>About</Link>
          </div>
          <div>
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      )}
    </>
  )
}

export default NavItems
