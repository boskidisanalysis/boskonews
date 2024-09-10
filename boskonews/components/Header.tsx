import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import NavLinks from "./NavLinks"
import SearchBox from "./SearchBox"
import DarkModeButton from "./DarkModeButton"
const Header = () => {
  return (
    <header>
        <div className="
        grid grid-cols-3 p-6 items-center
        ">
            <Bars3Icon className="h-8 w-8 cursor-pointer text-4xl" fontSize={40}/>
            <Link href='/' prefetch={false}>
                <h1 className="font-serif text-2xl md:text-4xl text-center">The <span className="underline decoration-6 decoration-orange-300">Bosko</span> News</h1>
            </Link>
            <div className="flex items-center justify-end space-x-2">
                {/* Dark Mode Button */}
                <DarkModeButton />
                <button type="button"
                className="
                hidden md:inline bg-slate-900 text-white text-md lg:text-lg px-4 lg:px-8 py-2 lg:py-4 rounded-full
                ">
                    Subrscibe Now
                </button>
            </div>
        </div>
        {/* NavLinks */}
        <NavLinks />
        {/* SearchBox */}
        <SearchBox />
    </header>
  )
}

export default Header