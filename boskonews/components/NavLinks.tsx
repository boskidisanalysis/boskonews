"use client"

import { categories } from "@/constants"
import NavLink from "./NavLink"
import { usePathname} from  'next/navigation'



const NavLinks = () => {
    const pathname = usePathname()
    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path
    }
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-base gap-4 pb-10 max-w-6xl mx-auto border-b">
        {categories.map((category)=>(
            <NavLink 
             key={category} 
             isActive={isActive(category)}
             category={category}/>
        ))} 
    </nav>
  )
}

export default NavLinks