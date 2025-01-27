'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div>
        {currentTheme === "dark" ? (
            <SunIcon className="h-8 w-8 text-yellow-500 cursor-pointer" onClick={() => setTheme("light")} /> 
        ) : (
            <MoonIcon className="h-8 w-8 text-gray-900 cursor-pointer" onClick={() => setTheme("dark")} /> 
        )
        
        }
    </div>
  )
}

export default DarkModeButton