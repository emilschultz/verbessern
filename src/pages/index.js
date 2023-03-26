import * as React from "react";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Verbessern">
      <h2>
        Verbessern means "To improve". I will try to improve my knowledge on
        writing about frontend technologies, patterns, best practices, and much
        more. You can improve yours by reading about it
      </h2>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
