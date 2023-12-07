import { getMovieDetails } from 'components/Api/ApiRequests';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);

  const fetchMovieDetails = async id => {
    try {
      const movies = await getMovieDetails(id);
      setMovieDetails(movies.data);
      setMovieGenres(movies.data.genres);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovieDetails(id);
  }, []);
  console.log(movieDetails);

  return (
    <main>
      <img src={movieDetails.backdrop_path} alt={movieDetails.title} />
      <h2>{movieDetails.title}</h2>
      <p>User Score:</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h4>Genres</h4>
      <p>{movieGenres.length && movieGenres.map(genre => genre.name)}</p>
      <p>Additional information</p>
      <ul>
        <li key="cast">
          <Link to="cast">Cast</Link>
        </li>
        <li key="reviews">
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading information...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
