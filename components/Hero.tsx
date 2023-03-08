import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Teacher"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative h-32 rounded-full object-cover mx-auto"
        src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-gray-500 uppercase tracking-[12px] pb-3">upcoming software engineer</h2>

        <h2 className="text-gray-50 uppercase tracking-[2px] pb-3 text-4xl font-semibold">Hi! I'm Sayan Paul</h2>

        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-0">{text}</span>
          <Cursor cursorColor="orange" />
        </h1>

        <div>
            <Link href="#about">
                <button className="homeButton">About</button>
            </Link>
            <Link href="#experience">
                <button className="homeButton">Experience</button>
            </Link>
            <Link href="#skills">
                <button className="homeButton">Skills</button>
            </Link>
            <Link href="#projects">
                <button className="homeButton">Projects</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
