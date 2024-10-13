"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
// import Typewriter, { TypewriterClass } from 'typewriter-effect'

const Hero = () => {
  return (
      <section className="text-gray-600 body-font bg-gray-100 "> {/**/}
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col 
  items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
    md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium 
      text-gray-900">
        I Am 
        <br className="hidden lg:inline-block"/>
        <Typewriter
        options={{
          strings:["Web Developer","& Teacher"],
          autoStart: true,
          loop:true,
        }}
        />
      </h1>
      <div className="w-[80px] h-[3px] bg-pink-300"></div>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra 
        air plant cold-pressed tacos poke beard tote bag. Heirloom echo 
        park mlkshk tote bag selvage hot chicken authentic tumeric 
        truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link href={'#Contact'}>
        <button className="inline-flex text-white bg-gray-600 border-0 
        py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
            Contact
            </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    {/* right mi image show nhi hu rhi h*/}
    <Image
            alt="hero"
            className="object-cover object-center rounded
            mx-auto w-[20rem]"
            src='../puplic/Images/osa (2).png'
            width={500}
            height={500}
          />
    </div>
  </div>
</section>
  )
}

export default Hero




