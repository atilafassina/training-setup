import { groq } from 'next-sanity'

export const MovieDetailsQuery = groq`*[_type == "movie" && slug.current == $slug][0]{
  title,
  poster,
  overview
}`

export const MovieParamsQuery = groq`*[_type == "movie" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

export const MovieListQuery = groq`*[_type == "movie" && defined(slug.current)]{
  _id,
  title, 
  slug,
  poster,
  overview
}`
