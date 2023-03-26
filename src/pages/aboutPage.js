import * as React from "react";
import Layout from "../components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>
        My name is Emil. I write to get better at programming. This blog is
        mostly for my self, but if anyone else learns something along the way,
        then thats just awesome!
      </p>
    </Layout>
  );
};

export const Head = () => <title>About Page</title>;

export default AboutPage;
