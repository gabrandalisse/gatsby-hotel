import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";

const Content = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`;

const AboutContent = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
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
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>

      <Content>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </Content>
    </>
  );
};

export default AboutContent;
