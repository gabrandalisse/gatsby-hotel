import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  margin: 15rem auto 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    width: 1000px;
    margin-right: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const HomeContent = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  const { title, content, image } = queryResult.allDatoCmsPage.nodes[0];

  return (
    <Container>
      <Image
        fluid={image.fluid}
        css={css`
          width: 200px;

          @media (max-width: 768px) {
            display: none;
          }
        `}
      />
      <div>
        <h2 data-testid="home-title">{title}</h2>
        <p data-testid="home-content">{content}</p>
      </div>
    </Container>
  );
};

export default HomeContent;
