import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SiteLayout } from "./SiteLayout";
import { PosterPage } from "./pages/PosterPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={SiteLayout />}>
          <Route index element={HomePage}/>
          <Route path="poster/:slug" element={PosterPage}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
