import React from 'react';
import { Layout } from './pages/Layout';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FindPlayerByOne } from './components/FindPlayerByOne';
import { ErrorBoundary } from 'react-error-boundary';
import { Players } from './pages/Players';
import { Stackblitz } from './pages/Home';
import { FallbackError } from './components/FallbackError';

function Farewell({ subject }) {
  //compnent is likely to throw an error
  //subject = 'User';

  return <div>Goodbye {subject.toUpperCase()}</div>;
}

// browserRouter is the top or parent
export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={FallbackError}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Stackblitz />} />
            <Route path="players">
              <Route index element={<Players />} />
              <Route path=":playerId" element={<FindPlayerByOne />} />
            </Route>
            <Route path="*" element={<Farewell />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
