import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'


type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity:1,
      }}
      transition={{
        duration: 1.5,
      }}
    className='h-screen flex relative flex-col text-left overflow-hidden md:flex-row max-w-full p-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute items-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

        <div className='w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default Experience;