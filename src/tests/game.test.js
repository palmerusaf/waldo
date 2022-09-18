import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../screens/game";

describe("TargetListItem integration", () => {
  it("insure TargetLIstItem calls updateCharacterList on click", () => {
    render(<Game />);
    const figure = screen.getByRole("figure");
    userEvent.click(figure);
    
  });
});
