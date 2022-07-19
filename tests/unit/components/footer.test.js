import React from "react";
import { render } from "@testing-library/react";
import Footer from "../../../src/components/footer";

describe("unit tests for Footer component", () => {
  it("should display the hotel title correctly", () => {
    const { getByTestId } = render(<Footer title={"The Fall Hotel"} />);

    expect(getByTestId("hotel-title")).toHaveTextContent("The Fall Hotel");
  });

  it("should display the footer text correctly", () => {
    const { getByTestId } = render(<Footer title={"The Fall Hotel"} />);
    const year = new Date().getFullYear();

    expect(getByTestId("footer-text")).toHaveTextContent(
      `The Fall Hotel. All right reserved. ${year} `
    );
  });

  it.skip("should display the styles for the footer text correctly", () => {
    const { getByTestId } = render(<Footer title={"The Fall Hotel"} />);

    expect(getByTestId("footer-text")).toHaveStyle({
      "text-align": "center",
      color: "#fff",
      "background-color": "rgb(33, 44, 55)",
      margin: "0",
      padding: "1rem",
    });
  });
});
