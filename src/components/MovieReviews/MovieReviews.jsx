import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../services/tmdbApi';


const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(r => (
          <li key={r.id}>
            <h4>{r.author}</h4>
            <p>{r.content}</p>
          </li>
        ))
      ) : (
        <li>No reviews yet.</li>
      )}
    </ul>
  );
};

export default MovieReviews;