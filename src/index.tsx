import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {worker} from './mocks/worker';

declare const PRODUCT_ENV: 'local' | 'production' | 'development' | '"hi"';

async function main() {
  // if (process.env.NODE_ENV === "development") {
  //   worker.start({
  //     serviceWorker: {
  //       url: "./mockServiceWorker.js",
  //     },
  //   });
  // }

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  console.log(process.env.LOCAL);
  console.log(process.env.DEV);
  console.log(process.env.PROD);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();

// storybook -- ok
// emotion or sc  -- ok
// react-query -- ok
// font - ok
// image - ok
// msw - ok
// jest, testing-library - ok

// 절대 경로 - gogo
// sc-snippets

// source-map
// stats? overlay?
// file?

// svg as components - X
