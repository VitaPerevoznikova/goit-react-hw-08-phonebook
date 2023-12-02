import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';

import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
