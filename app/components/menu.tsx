import React, { useReducer } from "react"
import Link from "next/link";


export default function menu() {
  return (
    <nav>
        <ul className='flex gap-5 text-xs'>
            <li>
              <Link href="/">Home</Link>
            </li>    
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>    
            <li>
              <Link href="/work">Work Experience</Link>
            </li>    
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>    
        </ul>
      </nav>
  )
}
