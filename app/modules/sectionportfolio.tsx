"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function sectionportfolio() {

  const imgportfolio = '../../images/portfolio.png';

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    let url = 'https://ayushshrestha.com.np/wp-json/wp/v2/portfolio?_embed';
    axios.get(url).then((res) => {
      //console.log(res);
      setPosts(res.data);
    });  
  });

  return (
   <>
    <section className='h-screenX bg-red-500 p-5 py-10 sm:p-10 md:p-20 text-white'>
      <div className="text-9xl font-thin mb-20 flex w-[200%] whitespace-nowrap">
        <div className="inline-block flex-nowrap animation-marquee">Data driven user focused value based.</div>
        <div className="inline-block flex-nowrap animation-marquee">Data driven user focused value based.</div>
      </div>
      <h2 className='text-md uppercase tracking-wider mb-1'>Portfolio</h2>
      <h3 className='text-5xl font-bold mb-4'>Building Brands, One Success Story at a Time.</h3>
      
      <div className='grid grid-cols-3 gap-1 mt-10'>
      {
      posts && posts.slice(0,3).map((post) => {
        //console.log(post.title.rendered);
        return( 
      <div key={post.id}>
        <div className='bg-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.02)] hover:drop-shadow-none transition delay-600 ease p-5X text-primary-500 grid grid-col rounded-md overflow-hidden'>
            <div className="overflow-hidden h-96">
              <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="" className="animate-infinite--zoominout" />
            </div>

            <div className="gridX grid-colX gap-y-4X absolute flex flex-colx items-end justify-start w-full h-full">
              <div className="bg-gradient-to-t from-red-500/90 from-20% p-5 w-full">
                  <a href={post.link} className='text-3xl font-medium mb-1' dangerouslySetInnerHTML={{__html: post.title.rendered}}></a>
                  <p className='text-md pb-5' dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substring(0, 50)+ "..."}}></p> 
                  
                  <strong className="block">Tools Used:</strong>
                  <div className='flex gap-0.5 pb-0.5'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>HTML/5</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>CSS/3</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>PHP</span> 
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>Wordpress</span> 
                  </div>
              </div>
            </div>
          </div>
        </div>
          
        )
      })
    }
    </div>
      
          

     </section>
     </>
  )
}