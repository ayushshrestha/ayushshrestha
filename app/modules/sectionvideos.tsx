import { RiEyeLine } from '@remixicon/react';
import React from 'react'
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function sectionvideos() {
    const Background = '../../images/istockphoto-1437030420-1024x1024.jpeg';
    const HeroImg =  {  
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundImage: `url(${Background})`,
    }
  
  return (
    <div className='bg-red-50 px-5 pb-20 sm:px-10 md:px-20 text-red-500'>
        <h2 className='text-md uppercase tracking-wider mb-1'>Videos</h2>
        <h3 className='text-5xl font-bold mb-4 text-red-500'>Digital experience extract to actionable insights.</h3>
        <p className='mb-10'></p>
        <div className="grid grid-cols-3 gap-1 mb-16">
          
          <div className="bg-white p-4X hover:drop-shadow-[0_10px_10px_rgba(239,68,68,0.2)] transition ease duration-700">
            <div className="relative">
                <div className='bg-gradient-to-t from-red-500/30 from-10% hover:from-20% transition ease duration-700 z-10 absolute w-full h-full'></div>
                <YoutubeEmbed embedId="LkmzniWsEqE" />
            </div>
            <h4 className='text-xl font-bold m-4'>Process of Custom Theme Wordpress with Tailwind</h4>
          </div>


          <div className="bg-white p-4X hover:drop-shadow-[0_10px_10px_rgba(239,68,68,0.2)] transition ease duration-700">
            <div className="relative">
                <div className='bg-gradient-to-t from-red-500/30 from-10% hover:from-20% transition ease duration-700 z-10 absolute w-full h-full'></div>
                <YoutubeEmbed embedId="LkmzniWsEqE" />
            </div>
            <h4 className='text-xl font-bold m-4'>Process of Custom Theme Wordpress with Tailwind</h4>
          </div>


          <div className="bg-white p-4X hover:drop-shadow-[0_10px_10px_rgba(239,68,68,0.2)] transition ease duration-700">
            <div className="relative">
                <div className='bg-gradient-to-t from-red-500/30 from-10% hover:from-20% transition ease duration-700 z-10 absolute w-full h-full'></div>
                <YoutubeEmbed embedId="LkmzniWsEqE" />
            </div>
            <h4 className='text-xl font-bold m-4'>Process of Custom Theme Wordpress with Tailwind</h4>
          </div>

        </div>



      <div className="flex justify-center">
        <a href="/ayush-resume-2023.pdf" className='bg-red-700 hover:bg-red-600 transition ease duration-500 text-white border-white px-4 py-2 rounded-full flex items-center gap-1'> 
          <RiEyeLine 
            size={16}
          /> View All Videos</a>
      </div>

    </div>
  )
}
