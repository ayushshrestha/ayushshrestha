import React from 'react'

import Logo from '../modules/logo'
import Menu from '../components/menu'


export default function header() {
  return (
    <header className='text-white w-full backdrop-blur-smX bg-black/10X p-4 px-10 flex items-center justify-between fixed top-0 z-10'>
        <Logo />
        <Menu />
    </header>
  )
}
