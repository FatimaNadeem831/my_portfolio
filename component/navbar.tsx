import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="bg-pink-100 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row 
      items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 
        md:mb-0">
          <Image
            alt="F&A"
            className="w-[90px]"
            src='../puplic/Images/osa (1).png'
            width={100}
            height={100} />
     
      <span className="ml-3 text-xl">H.Asma_Nadeem </span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center 
      text-base justify-center">
        <Link href = {"/"} className="mr-5 hover:text-pink-600">Home</Link>
        <Link href = {"#about"} className="mr-5 hover:text-pink-600">About</Link>
        <Link href = {"#skills"} className="mr-5 hover:text-pink-600">Skills</Link>
        <Link href = {"#project"} className="mr-5 hover:text-pink-600">Projects</Link>
        <Link href = {"#Contact"} className="mr-5 hover:text-pink-600">Contacts</Link>

      </nav>
      <a href="/src/app/image/file:///d%3A/nextjs/src/app/puplic/Images/project_01.png/pdf">       
      <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3
       focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0">
        {/* ye download wala button bhi nhi chal rha h  */}
      {/* <a href="/src/app/image/project_01.png">        */}
         Download Cv
        <FaCloudDownloadAlt className="text-xl ml-3 " /> 
        
      </button>
      </a>
    </div>
  </header>
  </div>
  )
}

export default Navbar
