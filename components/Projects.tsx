import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen items-center flex flex-col overflow-hidden max-w-full relative text-center justify-evenly md:text-center md:flex-row  p-10 mx-auto'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* projects */}
        </div>

        <div className='w-full top-30% absolute bg-[#F5A553]/50 left-0 h-[400px] -skew-y-12'/>
    </div>
  )
}

export default Projects