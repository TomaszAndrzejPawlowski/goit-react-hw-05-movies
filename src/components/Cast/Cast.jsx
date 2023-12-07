import { getMovieCredits } from 'components/Api/ApiRequests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  const fetchMovieCredits = async id => {
    try {
      const movies = await getMovieCredits(id);
      setMovieCast(movies.data.cast);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovieCredits(id);
  }, []);
  console.log(movieCast);

  return (
    <div>
      <ul>
        {movieCast.length &&
          movieCast.map(actor => (
            <li key={actor.id}>
              <img src={actor.profile_path} alt={actor.name} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
