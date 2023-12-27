import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Copyright from '../modules/copyright'
import Social from '../modules/social'





export default function sectionhero() {
  
const Background = '../../images/istockphoto-1437030420-1024x1024.jpeg';
const HeroImg =  {  
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundImage: `url(${Background})`,
}
  return (
    <section className='bg-red-50 h-screen text-white'>
      <div style={ HeroImg }>
        <div className=' bg-gradient-to-b from-red-500/90 from-20%'>
          <div className='bg-gradient-to-t from-red-500 from-20% h-screen flex flex-col'>
            <div className="p-4 flex items-end h-full p-5 py-10 sm:p-10 md:p-20">
              <div>
                <h2 className="text-8xl font-bold mb-10 relative">Turning ideas into reality with transforming technology.</h2>
                <ul>
                  <li className='flex gap-0.5 pb-0.5'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>HTML/5</span> 
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>CSS/3</span>  
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>XHTML</span>  
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>SCSS</span>  
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>TAILWIND</span>  
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Bootstrap</span> 
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Javascript/jQuery</span>
                  </li>
                  <li className='flex gap-0.5 pb-0.5'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Wordpress</span> 
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>VueJS</span>  
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>AngularJS</span>  
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>ReactJS</span> 
                  </li>
                  <li className='flex gap-0.5 pb-0.5'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Figma</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>AdobeXD</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Photoshop</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>VisualStudioCode</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Illustrator</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Lightroom</span>
                  </li>
                  <li className='flex gap-0.5 pb-0.5'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>UXDesign</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>InteractionDesign</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>VisualDesign</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Usability</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Information Architecture</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Project Management</span>
                  </li>
                  <li className='flex gap-0.5 pb-0.5'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>.NET</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>SQL</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>PHP</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>XML</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>ActionScript</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>mySQL</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>jQuery</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/10'>Ajax</span>
                  </li>
                </ul>
              </div>
            </div>
              <Copyright />
              <Social />
          </div>
        </div>
      </div>
     </section>
  )
}
