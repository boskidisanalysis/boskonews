
type Category = "general" | "business" | "entertainment" | "health" | "science" | "sports" | "technology";

type Article = {
    author: string | null;
    title: string;
    description: string;
    url: string;
    image: string | null;
    category: string;
    language: string;
    country: string;
    published_at: string;
    source: string;
}

type Pagination = {
    limit: int;
    offset: int;
    count: int;
    total: int;
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[]
}