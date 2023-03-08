import React from 'react'
import { motion } from "framer-motion"

type Props = {
    DirectionLeft? : boolean
}

function Skill({DirectionLeft}: Props) {
  return (
    <div className=''>
        <motion.img 
        initial={{
            x: DirectionLeft? -200: 200,
            opacity: 0.2,
        }}
        whileInView={{ opacity:1, x:0}}
        transition={{ duration:1 }}
        
        className='h-16 rounded-full z-20 border-gray-200 object-cover xl:h-20 filter group-hover:grayscale transition duration-300 ' 
        
        src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" />

        <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 h-16 w-16 group-hover:bg-white ease-in-out '>
            <div className='flex justify-center items-center h-full'>
                <p className='text-black font-bold opacity-100 text-2xl'>80%</p>
            </div>
        </div>

    </div>
  )
}

export default Skill