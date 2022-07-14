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

// TODO Make the Container responsive

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  margin: 4rem auto 0 auto;

  div {
    width: 1000px;
    margin-right: 20px;
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
    <Container>
      <Image
        fluid={imagen.fluid}
        css={css`
          width: 200px;
        `}
      />
      <div>
        <h2>{titulo}</h2>
        <p>{contenido}</p>
      </div>
    </Container>
  );
};

export default HomeContent;
