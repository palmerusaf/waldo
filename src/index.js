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
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXz141XcA-4PbdZi0q8YXDpLwSxK1UQug",
  authDomain: "waldo-7d581.firebaseapp.com",
  projectId: "waldo-7d581",
  storageBucket: "waldo-7d581.appspot.com",
  messagingSenderId: "34874304663",
  appId: "1:34874304663:web:99c627b7a87305a97ca1d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
