import React from 'react'

export default function sectionsocial() {
  const Background = '../../images/istockphoto-1437030420-1024x1024.jpeg';
  const HeroImg =  {  
    width: "100%",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${Background})`,
  }
  
  return (
    
    <div className='bg-red-50 p-5 py-10 sm:p-10 md:p-20 text-red-500'>
        <h2 className='text-md uppercase tracking-wider mb-1'>Social</h2>
        <h3 className='text-5xl font-bold mb-4 text-red-600'>Connecting minds, solving problems, advancing technology together.</h3>
        <p className='mb-10'>Social interactions within the engineering community play a pivotal role in fostering collaborative innovation. These social connections not only facilitate the exchange of ideas but also serve as a support system for tackling complex challenges.</p>
        <div className="grid grid-cols-4 gap-1">
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
          <div className="bg-white p-4 h-60" style={ HeroImg }></div>
        </div>
    </div>
  )
}
