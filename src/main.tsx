import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import PosterPage from "./pages/PosterPage.tsx";
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/posters" element={<PosterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
