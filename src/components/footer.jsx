import React from "react";
import { Link } from "gatsby";
import Navigation from "./nav";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Footer = ({ title }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navigation />
          <HomeLink to="/">
            <h1 data-testid="hotel-title"> The Fall Hotel </h1>
          </HomeLink>
        </div>
      </footer>
      <p
        data-testid="footer-text"
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. All right reserved. {year} &copy;{" "}
      </p>
    </>
  );
};

export default Footer;
