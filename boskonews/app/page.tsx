import NewsList from "@/components/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import response from "@/response.json"

async function Homepage() {
  // fetch the news data 
  const news: NewsResponse =  await fetchNews(categories.join(','));
  // const news: NewsResponse = await fetchNews(categories.join(','));
  return (
  <div>
    {/* NewsList news  */}
    <NewsList news={news} />
  </div>
  ) 
  
}

export default Homepage; 
