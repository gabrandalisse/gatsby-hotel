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
    <>
      <h2
        data-testid="home-title"
        css={css`
          text-align: center;
          margin-top: 15rem;
        `}
      >
        {title}
      </h2>

      <HomeText>
        <p data-testid="home-content">{content}</p>
        <Image fluid={image.fluid} />
      </HomeText>
    </>
  );
};

export default HomeContent;
