
import { RiEyeLine } from '@remixicon/react';

import WordpressApiData from '../data/wordpressApi';


export default function sectionblogs() {

  const imgportfolio = '../../images/portfolio.png';

  return (
    <section className='h-screenX bg-red-500 p-5 py-10 sm:p-10 md:p-20 text-white'>
        
      <h2 className='text-md uppercase tracking-wider mb-1'>Blogs</h2>
      <h3 className='text-5xl font-bold mb-4'>Staying up-to-date with these updates is essential for professionals in these fields to deliver outstanding and innovative products.</h3>
      
      <div className='grid grid-cols-3 gap-1 items-start my-10'>

        <WordpressApiData />

      </div>

      <div className="flex justify-center">
        <a href="/ayush-resume-2023.pdf" className='bg-red-700 hover:bg-red-600 transition ease duration-500 text-white border-white px-4 py-2 rounded-full flex items-center gap-1'> 
          <RiEyeLine 
            size={16}
          /> View All Blogs</a>
      </div>

     </section>
  )
}
