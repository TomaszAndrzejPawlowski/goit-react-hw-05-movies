import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
