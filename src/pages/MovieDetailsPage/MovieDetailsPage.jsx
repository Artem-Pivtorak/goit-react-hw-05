import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchMovieDetails } from '../../services/api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const { title, overview, genres, poster_path } = movie;

  return (
    <div className={css.container}>
      <Link to={backLink}>← Go back</Link>
      <div className={css.details}>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <ul>
            {genres.map(g => <li key={g.id}>{g.name}</li>)}
          </ul>
        </div>
      </div>

      <div className={css.links}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;