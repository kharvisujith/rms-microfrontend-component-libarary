import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card Component ", () => {

  test("render the Card component", () => {

    const { container,getByTestId } = render(<Card />);

    expect(container).toBeInTheDocument();
    expect(getByTestId('common-card-container')).toBeInTheDocument();

  });

});