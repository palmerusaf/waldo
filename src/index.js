import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Game from "./screens/Game.js";
import HighScores from "./screens/HighScores.js";
import FooterWrapper from "./Components/FooterWrapper.js";
import { TimerProvider } from "./contexts/TimerContext.js";
import "./index.css";
import { CharacterProvider } from "./contexts/CharacterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CharacterProvider>
      <TimerProvider>
        <FooterWrapper>
          <Routes>
            <Route path="waldo" element={<App />} />
            <Route path="game" element={<Game />} />
            <Route path="highscores" element={<HighScores />} />
          </Routes>
        </FooterWrapper>
      </TimerProvider>
    </CharacterProvider>
  </BrowserRouter>
);
