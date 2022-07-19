import React from "react";
import { render } from "@testing-library/react";
import Header from "../../../src/components/header";

describe("unit test for Header component", () => {
  it("should display the page title correctly", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header-title")).toHaveTextContent("The Fall Hotel");
  });
});
