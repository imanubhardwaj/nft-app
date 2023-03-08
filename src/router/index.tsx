import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Nfts from 'pages/Nfts';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Nfts />}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default Router;
