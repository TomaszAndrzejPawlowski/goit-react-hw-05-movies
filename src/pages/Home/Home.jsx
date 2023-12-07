import { getTrendingMovies } from 'components/Api/ApiRequests';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies.data.results);
      // console.log(movies.data.results);
      // console.log(trendingMovies);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`movies/${trendingMovie.id}`}>{trendingMovie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
