import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <header className='flex sticky top-1 items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center '>
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/sayan-paul-nitdgp/" bgColor='transparent' fgColor='gray' />
            
            <SocialIcon url="https://github.com/Sayan650" bgColor='transparent' fgColor='gray' />
            
            <SocialIcon url="https://www.instagram.com/paulland2002/" bgColor='transparent' fgColor='gray' />
            
            <SocialIcon url="https://www.facebook.com/profile.php?id=100012216876217" bgColor='transparent' fgColor='gray' />
        </motion.div>


        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center text-gray-300'>
            {/* contact me */}
            <SocialIcon className='cursor-pointer' network='email' bgColor='transparent' fgColor='gray' />
            
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
        </motion.div>



    </header>
  )
}

export default Header