import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL query 
    const query = gql`
  query MyQuery(
    $access_key: String!
    $categories: String!
    $keywords: String
  )   {
    mediastackQuery(
      access_key: $access_key
      countries: "gb"
      limit: "100"
      offset: "0"
      sort: "published_desc"
      categories: $categories
      keywords: $keywords
    ) {
      data {
        author
        country
        description
        category
        image
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }`;


    // fetch data with Next.js 13 caching
  const res = await fetch("https://virginiabeach.stepzen.net/api/nobby-pronghorn/__graphql",{
  method: "POST",
  // cache: isDynamic ? "no-cache" : "default",
  next: isDynamic ? {revalidate: 0} : {revalidate: 60},
    headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
        query,
        variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords,
        },
    }),
}

  )
    // console.log("LOADING NEW DATA FROM API FOR CATEGORY: ", category, keywords)
    const newsResponse = await res.json();

    // sort function by images vs not images present 
    const news = sortNewsByImage(newsResponse.data.mediastackQuery)
    // return res
    return news;
}

export default fetchNews;