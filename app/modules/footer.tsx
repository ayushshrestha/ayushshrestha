import React from 'react'
import Copyright from './copyright'
import { RiArrowRightLine, RiCloudLine } from '@remixicon/react'

export default function footer() {
  return (
    <section className='h-screenX bg-red-50 p-5 py-10 sm:p-10 md:p-20 text-red-400'>
        
      <h2 className='text-md uppercase tracking-wider mb-1'>Blogs</h2>
      <h3 className='text-red-500 text-5xl font-bold mb-4'>Love to hear from you</h3>
      <p>Feel free to reach if you want to collaborate with me, or simply have a chat</p>

      <div className="grid md:grid-cols-4 gap-10 mt-10 mb-20">
        <div className="col-span-2">
          <div className="flex gap-5">
            <button className="bg-red-500 hover:bg-red-300 transition ease duration-500 text-white border-none px-4 py-2 mb-10 rounded-full flex items-center gap-2"> <RiArrowRightLine size={16} /> Become a client</button>
            <a href="/ayush-resume-2023.pdf"  className='bg-red-500 hover:bg-red-300 transition ease duration-500 text-white border-none px-4 py-2 mb-10 rounded-full flex items-center gap-2'>  <RiCloudLine size={16} /> Want to hire me?</a>
          </div>

          <p>Don’t like the forms? Drop us a line via email.</p>
        </div>

        <div>
          <h6 className='text-red-500 text-2xl font-medium mb-3'>Contact</h6>
          <p><strong>Email:</strong> <a href="mailto:ayushfrontend@gmail.com">ayushfrontend@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+9779851122887">9851122887</a> </p>
          <p>Kathmandu ( Nepal )</p>
        </div>

        <div>
          <h6 className='text-red-500 text-2xl font-medium mb-3'>Follow Us</h6>
          <ul>
            <li>Dribbble</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>
      

      
     </section>
  )
}
