import React from "react";
import { render } from "@testing-library/react";
import RoomPreview from "../../../src/components/room-preview";

describe("unit tests for RoomPreview component", () => {
  const room = {
    title: "test-title",
    content: "test-content",
    image: {
      fluid: "test-image-fluid.jpg",
    },
    slug: "test-slug",
  };

  it("should display correctly the title prop data", () => {
    const { getByTestId } = render(<RoomPreview room={room} />);

    expect(getByTestId("room-pw-title")).toHaveTextContent("test-title");
  });

  it("should display correctly the content prop data", () => {
    const { getByTestId } = render(<RoomPreview room={room} />);

    expect(getByTestId("room-pw-content")).toHaveTextContent("test-content");
  });

  it("should display correctly the button element", () => {
    const { getByTestId } = render(<RoomPreview room={room} />);

    expect(getByTestId("room-pw-button")).toHaveTextContent("See Room");
  });
});
