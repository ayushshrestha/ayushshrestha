import { RiCloudLine } from '@remixicon/react'
import React from 'react'

export default function copyright() {
  return (
    <div className='fixed z-10 bottom-0 p-4 flex items-center gap-5'>copyright 2023 <a href="/ayush-resume-2023.pdf"  className='bg-red-500 hover:bg-red-300 transition ease duration-500 text-white border-none px-4 py-2 rounded-full flex items-center gap-2'>  <RiCloudLine size={16} /> Want to hire me?</a></div>
  )
}
