import type { Movie } from "../../types/movie"
import css from "./MovieGrid.module.css"

interface MovieGridProps {
    onSelect: (movie: Movie) => void
    movies: Movie[]
}

function MovieGrid({ onSelect, movies }: MovieGridProps) {
    return <ul className={css.grid}>
  {movies.map((movie) =>  <li key={movie.id}>
    <div onClick={() => onSelect(movie)} className={css.card}>
      <img 
		    className={css.image} 
		    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
		    alt={movie.title} 
		    loading="lazy" 
		  />
	    <h2 className={css.title}>{movie.title}</h2>
    </div>
  </li> )}

</ul>
}

export default MovieGrid