'use client'

import { useRouter } from "next/navigation";

type Props = {
    article: Article;
}

const ReadMoreButton = ({article}: Props) => {
    const router = useRouter()

    const handleClick = () => {
        const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join('&')
        const url = encodeURI(`/article?${queryString}`) 
        // const url = `/article?${encode(article)}`" 
        // console.log(url)
        router.push(url)
    }
// const ReadMoreButton = ({article}: Props) => {
//   const router = useRouter()

//   const handleClick = () => {
//       const params = new URLSearchParams(article) // create a URLSearchParams object from the article object
//       const url = `/article?${params.toString()}` // convert the object to a query string
//       console.log(url)
//       router.push(url)
//   }

  return (
    <button
    onClick={handleClick}
    className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
        Read More
    </button>
  )
}

export default ReadMoreButton