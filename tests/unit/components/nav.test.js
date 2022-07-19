import React from "react";
import Nav from "../../../src/components/nav";
import { render } from "@testing-library/react";

describe("unit test for Nav component", () => {
  it("should display the home link correctly", () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId("home-link")).toHaveTextContent("Home");
  });

  it("should display the about us link correctly", () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId("about-link")).toHaveTextContent("About Us");
  });
});
