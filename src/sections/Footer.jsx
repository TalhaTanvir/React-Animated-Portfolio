import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import {motion} from 'framer-motion'



const socials = [
  {Icon: FaXTwitter , label: "X" , href: "https://twitter.com"},
  {Icon: FaLinkedin , label: "LinkedIn" , href: "https://linkedin.com"},
  {Icon: FaGithub , label: "GitHub" , href: "https://github.com"},
]

const glowVarients = {
  initial : {scale:1 , y:0, filter:"drop-shadow(0 0 0 rgba(0,0,0))"},
  hover : {
    scale: 1.2 , y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: {type: "spring", stifness:300, damping:15}
  },
  tap: {scale:0.95, y:0, transition:{duration:0.88}}
}



function Footer() {
  return (
    <section className='w-full h-screen'>
      <motion.div className='relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6'
      initial={{opacity: 0 , y: 30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.8}}
      >
        <h1 className='font-semibold leading-none text-white texxt-center select-none'
        style={{
          fontSize: "clamp(3rem,5vw,14rem)",
          letterSpacing: "0.02em",
          lineHeight: 0.9,
          padding:"0 3vw",
          whiteSpace: "nowrap",
          textShadow: "0 2px 18px rgba(0,0,0,0)"

        }}
        >
          Talha Tanvir
        </h1>

      </motion.div>
    </section>
  )
}

export default Footer