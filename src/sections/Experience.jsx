import {motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState, useRef, useMemo } from 'react'



const experiences = [
  {
    role : "Web Developer",
    company : "Brain Mentors",
    duration : "2022",
    description : "Build high-performance apps, integrated AI features, improved engagement by 10%.",
  },
  {
    role : "Web Developer Intern",
    company : "Mobisoft Technologies",
    duration : "2022 - 2023",
    description : "Gained hands-on web development experiences.",
  },
  {
    role : "Web Developer",
    company : "HCL Techonologies",
    duration : "2022 - 2025",
    description : "Build frontend of GenAI-powered PV intake Apps with Next.js & TS for US client.",
  },
];

function ExperienceItem({exp, idx, start, end, scrollYprogress, layout}){
  const scale = useTransform(scrollYprogress , [start , end] , [0,1])
  const opacity = useTransform(scrollYprogress , [start , end] , [0,1])
  const y = useTransform(scrollYprogress , [start , end] , [idx%2 === 0 ? 30 : -30 , 0])
  const x = useTransform(scrollYprogress , [start , end] , [-24 , 0])

  if(layout === "desktop"){
    return(
      <div className='relative flex flex-1 justify-center items-center min-w-0'>
        <motion.div className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{height: 40 , opacity}}
        >

        </motion.div>
        <motion.article className={`absolute ${idx%2===0 ? "bottom-12" : "top-12"} bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
        style={{opacity , y , maxWidth : "90vw"}}
        transition = {{duration : 0.4 , delay : idx*0.15}}
        >
          <h3 className='text-xl font-semibold'>
            {exp.role}
          </h3>
          <p className='text-md text-gray-400 mb-3'>
            {exp.company} | {exp.duration}
          </p>
          <p className='text-md text-gray-300 break-words'>
            {exp.description}
          </p>

        </motion.article>

      </div>
    )
  }
  return(
    <div className='relative flex items-start'>
      <motion.div className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
      style={{scale , opacity}}
      >

      </motion.div>
      <motion.article className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
      style={{opacity , x}}
      transition={{duration : 0.4 , delay: idx*0.15}}
      >
        <h3 className='text-lg font-semibold break-words'>
          {exp.role}
        </h3>
        <p className='text-sm text-gray-400 mb-2 break-words'>
          {exp.company} | {exp.duration}
        </p>
        <p className='text-sm text-gray-300 break-words'>
          {exp.description}
        </p>

      </motion.article>
    </div>
  )
}

function Experience() {

  const sceneRef = useRef(null);
  const [isMobile , setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize" , checkMobile)
    return () => window.removeEventListener("resize" , checkMobile)
  },[])

  const SCENE_HEIGHT_VH = isMobile ? 160*experiences.length : 120*experiences.length;

  const {scrollYprogress} = useScroll({
    target: sceneRef,
    offset:["start start" , "end end"]
  })

  const thresholds = useMemo(() => experiences.map((_, i) => (i+1) / experiences.length),[])
  const lineSize = useTransform(scrollYprogress , (v) => `${v*100}%`)
  return (
    <section id='experience' className='relative bg-black text-white'>
      section
    </section>
  )
}

export default Experience