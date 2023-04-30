"use client";
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from 'next-themes'

const DarkMode = () => {
    const {systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <>
    {mounted && (currentTheme === 'dark' ? <MdLightMode onClick={() => {setTheme('light')}}/> : <BsFillMoonFill onClick={() => {setTheme('dark')}} /> )}
    </>
  )
}

export default DarkMode
