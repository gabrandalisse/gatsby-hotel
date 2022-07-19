import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
import Home from "../../../src/components/home";

describe("unit tests for Home component", () => {
  beforeEach(() => {
    jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
      allDatoCmsPage: {
        nodes: [
          {
            title: "test-title",
            content: "test-content",
            image: {
              fluid: "test-image-fluid",
            },
          },
        ],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the query title result correctly", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("home-title")).toHaveTextContent("test-title");
  });

  it("should display the query content result correctly", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("home-content")).toHaveTextContent("test-content");
  });
});
