import fetchNews from "@/lib/fetchNews"
import NewsList from "@/components/NewsList"
import { categories } from "@/constants"

type Props = {
    params: { category: Category}
}

const NewsCategory = async ({params}: Props) => {
    const news: NewsResponse = await fetchNews(params.category)

  return (
    <div>
        <h1 className="headerTitle">{params.category}</h1>
        <NewsList news={news} />
    </div>
  )
}

export default NewsCategory

export async function generateStaticParams(){
    return categories.map(category => ({
        category: category
    }))
}