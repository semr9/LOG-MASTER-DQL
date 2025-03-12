import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AppHeader, Page } from '@dynatrace/strato-components-preview/layouts';
import { Test } from './pages/Test';

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.NavItems>
            <AppHeader.AppNavLink as={Link} to="/" />
          </AppHeader.NavItems>
        </AppHeader>  
      </Page.Header>
      <Page.Main>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Page.Main>
    </Page>
  );
};