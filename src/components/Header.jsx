import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className='flex justify-between items-center mx-2 max-w-7xl sm:mx-auto'>
      <div className='flex items-center'>
        <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
        <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill}/>
      </div>
      <div className='flex items-center space-x-5'>
        <DarkMode />
        <Link href='/'>
            <h2><span className='bg-amber-500 font-bold px-3 py-1 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
        </Link>
      </div>
    </div>
  )
}

export default Header
