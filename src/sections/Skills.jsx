import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiFramer } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import {motion} from "Framer-motion"







function Skills() {


  const skills = [
    {icon: <FaHtml5 /> , name: "HTML"},
    {icon: <SiCss3 /> , name: "CSS"},
    {icon: <RiJavascriptFill /> , name: "JavaScript"},
    {icon: <SiTailwindcss /> , name: "Tailwind CSS"},
    {icon: <BiLogoTypescript /> , name: "TypeScript"},
    {icon: <SiFramer /> , name: "Framer Motion"},
    {icon: <FaReact /> , name: "React JS"},
    {icon: <SiNextdotjs /> , name: "Next JS"},
    {icon: <RiNodejsLine /> , name: "Node JS"},
    {icon: <SiExpress /> , name: "Express JS"},
    {icon: <SiMongodb /> , name: "Mongo DB"},
  ]



  return (
    <section id="skills" className='h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-pink-800 text-white overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='abbsolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gadient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]'/>
        <div className='abbsolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gadient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]'/>
      </div>

      <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10'>
        My Skills
      </motion.h2>
      
    </section>
  )
}

export default Skills