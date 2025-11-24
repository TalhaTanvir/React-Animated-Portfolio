import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { FiX } from 'react-icons/fi'

function OverlayMenu(isOpen, onClose) {
  const links = ["Home","About","Skills","Projects","Experience","Testimonials","Contact"]
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className='fixed inset-0 flex items-centerjustify-center z-50'>

          <button onClick={onClose} className='absolute top-6 right-6 text-white text-3xl' aria-label="Close Menu">

            <FiX/>


          </button>

          <ul className=''>
            {
              links.map((item , index) => (
                <motion.li key={index}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y:0}}
                transition={{delay:0.3 + index*0.1}}>

                  <a href="">
                    {item}
                  </a>

                </motion.li>
              ))
            }

          </ul>

        </motion.div>
      )

      }
    </AnimatePresence>
  )
}

export default OverlayMenu