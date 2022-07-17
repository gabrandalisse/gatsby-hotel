import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Components
import Layout from "../components/layout";
import Hero from "../components/hero";
import HomeContent from "../components/home";
import RoomPreview from "../components/room-preview";

// Hooks
import useRooms from "../hooks/use-rooms";

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {
  const rooms = useRooms();

  return (
    <Layout>
      <Hero />
      <HomeContent />

      <h2
        css={css`
          text-align: center;
          margin-top: 15rem;
        `}
      >
        Our Rooms
      </h2>

      <RoomList>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </RoomList>
    </Layout>
  );
};

export default IndexPage;
