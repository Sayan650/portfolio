import Head from 'next/head'

import { Inter } from 'next/font/google'
import Header from '@component/components/Header'
import Hero from '@component/components/Hero'
import About from '@component/components/About'
import Experience from '@component/components/Experience'
import Skills from '@component/components/Skills'
import Projects from '@component/components/Projects'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Sayan Portfolio</title>
      </Head>

      
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* About me */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* Projects */}
      <section className='snap-start' id='projects'>
        <Projects/>
      </section>

      {/* Contact me */}
    </div>
  )
}
