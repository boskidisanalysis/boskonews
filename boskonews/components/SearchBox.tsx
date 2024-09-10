'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = () => {
    const [input, setInput] = useState('');
    const router = useRouter();

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!input) return

        router.push(`/search?term=${input}`);
    }
  return (
    <form 
    onSubmit={handleSearch}
    className="max-w-6xl mx-auto flex items-center justify-between px-5"
    >
        <input
        placeholder="Search for news..." 
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent dark:text-orange-400"/>
        <label htmlFor=""></label>

        <button 
        disabled={!input}
        type="submit"
        className="text-orange-400 disabled:text-gray-400">Search</button>
    </form>
  )
}

export default SearchBox