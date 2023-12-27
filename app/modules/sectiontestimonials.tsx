"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { RiDoubleQuotesL } from '@remixicon/react';

export default function sectiontestimonials() {

const imgportfolio = '../../images/portfolio.png';
const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    let url = 'https://ayushshrestha.com.np/wp-json/wp/v2/testimonial?_embed';
    axios.get(url).then((res) => {
      console.log(res);
      setPosts(res.data);
    });  
  });

  return (
    
    <>
    <section className='h-screenX bg-red-50 py-20x'>
        <div className="container mx-auto">
            <div className="bg-white p-5 py-10 sm:p-10 md:p-20 rounded-xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.03)] ">
                <div className="sm:grid md:grid-cols-3 gap-20">
                    <div>
                        <h2 className='text-md uppercase tracking-wider mb-1 text-red-500'>What other says?</h2>
                        <p className='text-gray-500'>Achieve faster release cycles, improved collaboration, and enhanced overall software quality</p>
                    </div>
                    {
      posts && posts.slice(0,3).map((post) => {
        //console.log(post.title.rendered);
        return( 
                    <div className="col-span-2 text-red-500 flex items-start" key={post.id}>
                        <RiDoubleQuotesL
                            size={64} // set custom `width` and `height`
                            color="red" // set `fill` color
                            className="w-96" // add custom class name
                        />
                        <div className='ms-3'>
                            <h3 className='text-3xl font-medium text-primary-500 border-b-2 border-primary-300 pt-4 pb-10 mb-10'  dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></h3>
                            <div className="sm:flex justify-between">
                                <div className="sm:flex items-center">
                                    <div className="w-24 h-14 overflow-hidden rounded-full">
                                        <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="" />
                                    </div>
                                    <div className="sm:ms-5">
                                        <div className="text-2xl text-primary-500 font-bold">{post.title.rendered} </div>
                                        <div className="text-primary-400">{post._embedded['wp:term'][0][0].name}</div>
                                    </div>
                                </div>
                                <div className="flex text-xs text-black/20"> {post.date} </div>
                            </div>
                        </div>
                    </div>
          
        )
      })
    }
                </div>
                
            </div>
        </div>
   </section>
   </>
  )
}
