import React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h1 data-testid="404-title">404: Not Found</h1>
    <p  data-testid="404-text">You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
