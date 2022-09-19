import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Game from "./screens/game.js";
import HighScores from "./screens/HighScores.js";
import FooterWrapper from "./components/FooterWrapper.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FooterWrapper>
      <Routes>
        <Route path="waldo" element={<App />} />
        <Route path="game" element={<Game />} />
        <Route path="highscores" element={<HighScores />} />
      </Routes>
    </FooterWrapper>
  </BrowserRouter>
);
