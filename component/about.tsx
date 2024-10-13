import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
     <div id="about">
          <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row 
            flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="about"
        src='../puplic/Images/osa (2).png'
        width={400}
        height={400}
      />
      {/*  */}
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 
            flex flex-col md:items-start md:text-left items-
            center text-center">
      <h1 className="title-font sm:text-4xl text-3xl 
            mb-4 font-medium text-gray-900">
        About me
        
      </h1>
      <p className="mb-5 leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et id, nobis iusto minus 
        aperiam numquam libero dolor eaque veniam explicabo. 
        Corporis obcaecati suscipit aperiam reprehenderit facilis 
        eligendi voluptas illo omnis.
      </p>

      <p className="mb-5 leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et id, nobis iusto minus 
        aperiam numquam libero dolor eaque veniam explicabo. 
        Corporis obcaecati suscipit aperiam reprehenderit facilis 
        eligendi voluptas illo omnis.
      </p>
      <div className="flex justify-center">
        <a href={".././puplic/cv/Resume builder.pdf"}>
        <button className="inline-flex text-white bg-gray-400 
                    border-0 py-2 px-6 focus:outline-none 
                    hover:bg-pink-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
