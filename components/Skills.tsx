import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{ opacity:1, }}
    transition={{ duration:1.2 }}
    
    className='h-screen items-center flex flex-col relative text-center justify-evenly md:text-center md:flex-row p-10 mx-auto max-w-[2000px]'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='top-36 uppercase text-gray-400 tracking-[3px] absolute text-sm'>hover over to check current profeciency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>

    </motion.div>
  )
}

export default Skills