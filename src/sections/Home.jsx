import React, { useEffect, useMemo, useState } from 'react'
import {motion} from "framer-motion"
import ParticlesBackground from '../components/ParticlesBackground'







function Home() {
  const roles = useMemo(() => ["Web Developer", "Frontend Developer", "MERN Stack Developer"])

  const  [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(()=>{
    const current = roles[index];
    const timeout = setTimeout(() => {
      if(!deleting && subIndex < current.length) setSubIndex(v => + 1);
      else if(!deleting && subIndex === current.length) setTimeout (() => setDeleting(true), 1200);
      else if(deleting && subIndex > 0) setSubIndex(v => v - 1);
      else if(deleting && subIndex === 0) {setDeleting(false); setIndex( p => (p + 1) % roles.length);}

    } , deleting ? 40 : 60)

    return () => clearTimeout(timeout);

  }, [subIndex , index , deleting , roles])



  return (
    <section id='home' className='w-full h-screen relative bg-black overflow-hidden'>
      <ParticlesBackground/>

      <div className='absolute inset-0'>
        <div className='absolute -top-32 -left-32 w-[72vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] rounded-full bg-gradient-to-r from[#302b63] via[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse'>

        </div>

        <div className='absolute bottom-0 right-0 w-[72vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] rounded-full bg-gradient-to-r from[#302b63] via[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500'>

        </div>
      </div>

      <div className='relative z-10 h-full w-full max-w-7xl max-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <div>
            <motion.div
            className='mb-3 text-xl sm:text-2xl'
            >

              <span>
                {roles[index].substring(0,subIndex)}
              </span>

            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home