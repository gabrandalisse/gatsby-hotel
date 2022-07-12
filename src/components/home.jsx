import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";

const HomeText = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`;

const HomeContent = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  const { titulo, contenido, imagen } = queryResult.allDatoCmsPagina.nodes[0];

  return (
    <>
      <h2
        css={css`
          font-size: 4rem;
          margin-top: 4rem;
          text-align: center;
        `}
      >
        {titulo}
      </h2>

      <HomeText>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </HomeText>
    </>
  );
};





export default HomeContent;
