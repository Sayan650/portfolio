import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:[600px] xl:w-[900px] snap-center bg-[#333] p-10 opacity-40 hover:opacity-100'>
        <motion.img 
        initial={{
            y:-200,
            opacity: 0,
          }}
          whileInView={{
            y:0,
            opacity:1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
        className='w-24 h-24 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]'
        src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>CEO of StartSmall</h4>
            <p className='font-bold text-2xl text-gray-400 mt-1'>StartSmall</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-8 rounded-full' 
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
                <img className='h-8 rounded-full' 
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
                <img className='h-8 rounded-full' 
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Started... - Ended... 
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Some Points</li>
                <li>Some Points</li>
                <li>Some Points</li>
                <li>Some Points</li>
                <li>Some Points</li>
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard