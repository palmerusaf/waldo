import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Game from "./screens/Game.js";
import LeaderBoard from "./screens/LeaderBoard.js";
import FooterWrapper from "./components/FooterWrapper.js";
import { TimerProvider } from "./contexts/TimerContext.js";
import "./index.css";
import { CharacterProvider } from "./contexts/CharacterContext";
import { GameCompleteProvider } from "./contexts/GameCompleteContext";
import { PlayerNameProvider } from "./contexts/PlayerNameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ContextProviders = ({ children }) => (
  <PlayerNameProvider>
    <GameCompleteProvider>
      <CharacterProvider>
        <TimerProvider>{children}</TimerProvider>
      </CharacterProvider>
    </GameCompleteProvider>
  </PlayerNameProvider>
);

root.render(
  <BrowserRouter>
    <ContextProviders>
      <FooterWrapper>
        <Routes>
          <Route path="waldo" element={<App />} />
          <Route path="game" element={<Game />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
        </Routes>
      </FooterWrapper>
    </ContextProviders>
  </BrowserRouter>
);
