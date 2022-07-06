import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;

const RoomPreview = ({ room }) => {
  const { contenido, imagen, titulo, slug } = room;

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <Image fluid={imagen.fluid} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>

        <Button to={slug}>See Room</Button>
      </div>
    </div>
  );
};

export default RoomPreview;
