export function Movies({ movies = [{}] }) {
  return (
    <ul>
      {movies.map(({ __id, title }) => (
        <li key={__id}>{title}</li>
      ))}
    </ul>
  )
}
