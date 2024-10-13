import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-100">
      <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto  flex items-center sm:flex-row flex-col">{/**/ }
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ">
        <Image
            alt="F&A"
            className="w-[90px]"
            src='../puplic/Images/osa (1).png'
            width={100}
            height={100} />
        <span className="ml-3 text-xl">H.Asma_Nadeem</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 
    sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 @Tailblocks@ 
    </p>
    {/* inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start */}
    <span className=" text-4xl hover:text-[#ff0000]">YouTube
      <Link
      target="_blank"
      href={"https://www.youtube.com/@CodeWithHamzaa"}  className="text-gray-600">
        < FaYoutube  className="text-4xl hover:text-[#ff0000]"/>
        
    </Link>
    </span>
  </div>
</footer>
    </div>
  );
};

export default Footer
