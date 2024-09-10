import LiveTimestamp from "@/components/LiveTimestamp";
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}

// const parseArticle = (params: URLSearchParams): Article => {
//     // create an empty article object
//     const article: Article = {
//       author: null,
//       title: "",
//       description: "",
//       url: "",
//       image: null,
//       category: "",
//       language: "",
//       country: "",
//       published_at: "",
//       source: "",
//     };
  
//     // loop through the params entries and assign them to the article object
//     for (const [key, value] of params.entries()) {
//       // check if the value is "null" and convert it to null
//       if (value === "null") {
//         article[key as keyof Article] = null;
//       } else {
//         // otherwise, assign the value as it is
//         article[key as keyof Article] = value;
//       }
//     }
  
//     // return the article object
//     return article;
//   };
  

const ArticlePage = ({searchParams}: Props) => {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }

    const article = searchParams as Article; 
    // console.log(article);
// const ArticlePage = ({searchParams}: Props) => {
//     if (!searchParams) {
//         return notFound();
//     }

//     const params = new URLSearchParams(searchParams) // create a URLSearchParams object from the searchParams object
//     const article = parseArticle(params) // parse the URLSearchParams object into an article object
//     console.log(article);


  return (
    <article>
        <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
            {article.image && (
                <img 
                src={article.image}
                alt={article.title} 
                className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" />   
            )}
{/* 
            { article.image !== null ? 
                (<img  
                src={article.image}
                alt={article.title}
                className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" /> ) : null } */}
{/* 
                { article.image && 
                (<img  
                src={article.image}
                alt={article.title}
                className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" /> ) } */}
            <div className="px-10">
                <h1 className="headerTitle px-0 no-underline pb-2">
                    {article.title}
                </h1>
                <div className="flex divide-x-2 space-x-4">
                    <h2 className="font-bold">By: {article.author || 'unknown'}</h2>
                    <h3 className="font-bold pl-4">Source: {article.source || 'unknown'}</h3>
                    <p className="pl-4">Published: <LiveTimestamp time={article.published_at}/></p>
                </div>
                <p className="pt-4">{article.description}</p>
            </div>
        </section>
    </article>
  )
}

export default ArticlePage