import { lazy, useState } from 'react';
import { getTrendingMovies } from './Api/ApiRequests';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home/Home';
import { NotFound } from './NotFound/NotFound';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
// const Home = lazy(() => import('./Home/Home'));

export const App = () => {
  // const [variable, setVariable] = useState([]);

  // const fetchApi = async () => {
  //   try {
  //     const movieTit = await getTrendingMovies();
  //     setVariable(movieTit.results);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <button type="button" onClick={fetchApi}>
        FETCH
      </button>
      <ul>
        {variable.map(varia => (
          <li>{varia.title}</li>
        ))}
      </ul> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
