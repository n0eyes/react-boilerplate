import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

declare const PRODUCT_ENV: "local" | "production" | "development" | '"hi"';

async function main() {
  // if (process.env.NODE_ENV === "development") {
  //   console.log(window.location.pathname);
  //   if (window.location.pathname === "/login") {
  //     window.location.pathname = "/";
  //     console.log("first");
  //     return;
  //   }
  //   const { worker } = require("./mocks/worker");

  //   await worker.start({
  //     serviceWorker: {
  //       url: "/mockServiceWorker.js",
  //     },
  //   });
  // }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  console.log(PRODUCT_ENV);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

main();

// storybook -- ok
// emotion or sc  -- ok
// react-query -- ok

// msw
// zustand
// jest, testing-library
// css , image , font , file
