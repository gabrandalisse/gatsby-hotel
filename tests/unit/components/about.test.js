import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
import AboutUs from "../../../src/components/about";

describe("unit tests for AboutUs component", () => {
  beforeEach(() => {
    jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
      allDatoCmsPage: {
        nodes: [
          {
            title: "test-title",
            content: "test-content",
            image: {
              fluid: "test-image-fluid-value",
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
    const { getByTestId } = render(<AboutUs />);

    expect(getByTestId("about-title")).toHaveTextContent("test-title");
  });

  it("should display the query content result correctly", () => {
    const { getByTestId } = render(<AboutUs />);

    expect(getByTestId("about-content")).toHaveTextContent("test-content");
  });
});
