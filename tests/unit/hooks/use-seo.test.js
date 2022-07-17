import * as Gatsby from "gatsby";
import useSeo from "../../../src/hooks/use-seo";

describe("unit tests for use-seo hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the correct data from the query", () => {
    jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
      datoCmsSite: {
        globalSeo: "return-test-value",
      },
    });

    expect(useSeo()).toStrictEqual("return-test-value");
  });
});
