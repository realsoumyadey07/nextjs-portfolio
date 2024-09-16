"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const Skills = () => {
  const projects = [
    {
      title: "Reactjs",
      description:
        "A popular UI library for building dynamic frontend web applications. I use this very often for building dynamic web applications.",
      link: "https://react.dev/",
    },
    {
      title: "TypeScript",
      description:
        "A superset of javascript that lets you write your javascript code with the additional type safety. Now a days I use this tool more to create webapps",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Nextjs",
      description:
        "A fullstack framework of react created by Vercel. I use it to build my client applications, I have worked with the api-routes also.",
      link: "https://nextjs.org/",
    },
    {
      title: "Node.js",
      description:
        "A runtime environment of javascript that lets you write javascript in server side.",
      link: "https://nodejs.org/en",
    },
    {
      title: "MongoDB",
      description:
        "A most popular NoSql database, used mostly with MERN eco-system. Currently I do use this database more in my word.",
      link: "https://www.mongodb.com/products/platform/atlas-database",
    },
    {
      title: "Express.js",
      description:
        "Express is an open-source web application framework for Node. js. It provides a robust set of features for building web applications.",
      link: "https://expressjs.com/",
    },
  ];
  return (
    <div id="Skills" className='min-h-screen'>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

export default Skills
