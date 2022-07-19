import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`;

const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p {
    font-size: 2rem;

    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero-img.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <ImageText>
        <h1 data-testid="hero-title">Welcome to Fall Hotel</h1>
        <p data-testid="hero-text">The best place for your vacations</p>
      </ImageText>
    </ImageBackground>
  );
};

export default Hero;
