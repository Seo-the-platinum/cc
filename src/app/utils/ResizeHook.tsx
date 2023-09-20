'use client'
import React, { useEffect, useState } from 'react'

const ResizeHook = () => {
    //declare state variable to return from hook
    const [ width, setWidth ] = useState(0)
    //useEffect to determine when component has mounted

    useEffect(()=> {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return ()=> window.removeEventListener('resize', handleResize)
    },[])

  return width === 0 ? 'loading' : width
}

export default ResizeHook