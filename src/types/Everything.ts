export type Everything = {
  status: string
  totalResults: number
  articles: Articles[]
}

export type Articles = {
  source: SourceObject
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: string
}

type SourceObject = {
  id: string
  name: string
}
