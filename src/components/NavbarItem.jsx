'use client';
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
const NavbarItem = ({title, param}) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")
  return (
    <div>
      <Link href={`/?genre=${param}`} className={`hover:text-amber-600 font-semibold p-2 ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500" }`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
