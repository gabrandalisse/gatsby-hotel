import * as Gatsby from "gatsby";
import useRooms from "../../../src/hooks/use-rooms";

describe("unit tests for use-rooms hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the correct data from the query", () => {
    jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
      allDatoCmsRoom: {
        nodes: [
          {
            title: "room 1",
            id: "1",
            content: "test content",
            image: "test-image.jpg",
            slug: "slg1",
          },
        ],
      },
    });

    expect(useRooms()).toStrictEqual([
      {
        title: "room 1",
        id: "1",
        content: "test content",
        image: "test-image.jpg",
        slug: "slg1",
      },
    ]);
  });
});
