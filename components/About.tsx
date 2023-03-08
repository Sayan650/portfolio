import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <div
    className='h-screen items-center flex flex-col relative text-center justify-evenly md:text-center md:flex-row max-w-7xl p-10 mx-auto'
    >
      <motion.h3 
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity:1,
      }}
      className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</motion.h3>

      <motion.img 
        
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="justify-center -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:[600px] "

      src='https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'/>

      <div>
        <motion.h3 
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity:1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='uppercase tracking-widest text-2xl p-10'>It's a <span className='text-red-500'> little</span> heading</motion.h3>

        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ea natus nostrum eveniet rem consequuntur! Veniam sequi id magnam quia impedit aliquid sed corporis blanditiis laudantium tempora architecto vero ratione, voluptates quidem itaque tempore ex. Dolor nulla corrupti facilis. Enim dolorum blanditiis autem, eum sint asperiores eos cumque rem error quod, soluta quas eveniet recusandae aliquid, facere explicabo dolor possimus dolores architecto aut modi corrupti incidunt? Sapiente rem doloribus quam necessitatibus porro, autem molestias aliquam eaque nesciunt debitis quia optio!</p>

      </div>

      

    </div>
  )
}
