import { getMovieReviews } from 'components/Api/ApiRequests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  const fetchMovieCredits = async id => {
    try {
      const movies = await getMovieReviews(id);
      setMovieReviews(movies.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovieCredits(id);
  }, []);
  console.log(movieReviews);

  return (
    <div>
      <ul>
        {movieReviews.length === 0 ? (
          <div>We don't have any reviews for this movie.</div>
        ) : (
          movieReviews.map(review => (
            <li key={review.id}>
              <strong>Author: {review.author}</strong>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
