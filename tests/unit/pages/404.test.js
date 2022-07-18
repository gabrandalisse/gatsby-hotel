import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
import NotFoundPage from "../../../src/pages/404";

describe("unit test for 404 page", () => {
  beforeEach(() => {
    jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
      datoCmsSite: {
        globalSeo: {
          fallbackSeo: {
            description: "test-value",
            title: "test-value",
          },
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display all html elements correctly", () => {
    const { getByTestId } = render(<NotFoundPage />);

    expect(getByTestId("404-title")).toHaveTextContent("404: Not Found");
    expect(getByTestId("404-text")).toHaveTextContent(
      "You just hit a route that doesn't exist... the sadness."
    );
  });
});
