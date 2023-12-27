"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function WordpressApi() {
   
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    let url = 'https://ayushshrestha.com.np/wp-json/wp/v2/posts';
    axios.get(url).then((res) => {
     // console.log(res);
      setPosts(res.data);
    });
    
  });

  return (
    <>
    {
      posts && posts.slice(0,3).map((post) => {
        //console.log(post.title.rendered);
        return( 
          <div key={post.id}>
            <div className='drop-shadow-[0_20px_20px_rgba(0,0,0,0.02)] hover:drop-shadow-none transition delay-600 ease text-primary-500 grid grid-col rounded-md'>
              <a href={post.link} className="bg-gradient-to-t from-red-500/90 from-20% rounded-md h-64 rounded-xl overflow-hidden">
                <img src={post.featured_image} alt="" className="animate-infinite--zoominout" />
              </a>
              <div className="p-5 w-full">
                  <a href={post.link} className='text-2xl font-medium mb-3' dangerouslySetInnerHTML={{__html: post.title.rendered}}></a>
                  <p className='text-md pb-5' dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substring(0, 150)+ "..."}}></p> 
                  <div className='flex gap-0.5 pb-0.5 hidden'>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>HTML/5</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>CSS/3</span>
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>PHP</span> 
                    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>Wordpress</span> 
                  </div>
              </div>
            </div>
          </div>
        )
      })
    }
      
          
    </>
  )
}


export default WordpressApi;