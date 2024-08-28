import React from 'react'
import {Link} from "react-scroll"
import { TextGenerateEffect } from './ui/text-generate-effect'

type NavbarItemsProp = {
  isSidebarOpen?: boolean
}

const navLinks = [
  {
    id: 1,
    title: "Hero"
  },
  {
    id: 2,
    title: "Projects"
  },
  {
    id: 3,
    title: "Skills"
  },
  {
    id: 4,
    title: "Contact"
  }
]


const NavItems = ({ isSidebarOpen }: NavbarItemsProp) => {
  return (
    <>
      <ul className='hidden lg:flex cursor-pointer items-center gap-[5rem] lg:mr-10'>
        {
          navLinks && navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to={navLink.title} smooth={true} duration={500} spy={true} offset={-80}>
                <TextGenerateEffect words={navLink.title} />
              </Link>
            </li>
          ))
        }
        
      </ul>
      {isSidebarOpen && (
        <ul className='lg:hidden h-[40%] cursor-pointer flex flex-col justify-evenly items-center'>
          {
          navLinks && navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to={navLink.title} smooth={true} duration={500} spy={true} offset={-80}>
                <TextGenerateEffect words={navLink.title} />
              </Link>
            </li>
          ))
        }
        </ul>
      )}
    </>
  )
}

export default NavItems
