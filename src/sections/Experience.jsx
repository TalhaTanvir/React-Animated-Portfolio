import { useTransform } from 'motion/react';
import React from 'react'



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
        <motion.article className>

        </motion.article>

      </div>
    )
  }
}

function Experience() {
  return (
    <section id='experience' className='relative bg-black text-white'>

    </section>
  )
}

export default Experience