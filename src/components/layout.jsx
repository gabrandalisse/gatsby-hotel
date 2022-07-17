import React from "react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/react";

// Components
import Header from "./header";
import Footer from "./footer";

// Hooks
import useSeo from "../hooks/use-seo";

const Layout = props => {
  const {
    fallbackSeo: { description, title },
  } = useSeo();

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: 'Roboto', sans-serif;
          }

          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }

          h1,
          h2 {
            font-family: 'Italiana', serif;
          }

          h2 {
            font-size: 5em;
          }

          h3 {
            font-family: 'Roboto', sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossorigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      {props.children}
      <Footer title={title} />
    </>
  );
};

export default Layout;
