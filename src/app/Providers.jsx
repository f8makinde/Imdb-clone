"use client";
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div className='dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300 min-h-screen select-none text-gray-700'>
        {children}
        </div>

    </ThemeProvider>
  )
}

export default Providers
