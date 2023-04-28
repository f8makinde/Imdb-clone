import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-100 my-4  dark:bg-gray-600 p-4 mx-auto flex justify-center gap-12'>
        <NavbarItem title='Trending' param='fetchTrending'/>
        <NavbarItem title ='Top Rated' param='fetchTopRated'/>
    </div>
  )
}

export default Navbar
