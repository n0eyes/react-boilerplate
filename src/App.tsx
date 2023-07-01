import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  Object.entries({});
  const k = () => {
    //
  };

  k?.();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>app</div>
            </>
          }
        />
        <Route path="/hi" element={<div>hi</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
