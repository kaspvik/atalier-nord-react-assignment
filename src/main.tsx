import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import FirstPosterPage from "./pages/FirstPosterPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import SecondPosterPage from "./pages/SecondPosterPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/Spectrum" element={<FirstPosterPage />} />
          <Route path="/Botanical" element={<SecondPosterPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
