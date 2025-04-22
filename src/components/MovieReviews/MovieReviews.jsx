import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../../services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
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