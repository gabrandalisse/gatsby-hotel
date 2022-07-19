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

const AboutUs = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about-us" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
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
        data-testid="about-title"
        css={css`
          text-align: center;
          margin-top: 4rem;
        `}
      >
        {title}
      </h2>

      <Content>
        <p data-testid="about-content">{content}</p>
        <Image fluid={image.fluid} />
      </Content>
    </>
  );
};

export default AboutUs;
