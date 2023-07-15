import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Main from './Main';
import Test from './Test';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const App = () => {
  Object.entries({});
  const k = () => {
    //
  };

  k?.();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Main />
                <Test />
              </Suspense>
            }
          />
          <Route path="/hi" element={<div>hi</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
