import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <h1>About</h1>
      <p>
        My name is Emil. I write to get better at programming. This blog is
        mostly for my self, but if anyone else learns something along the way,
        then thats just awesome!
      </p>
      <Link to="/">Back home</Link>
    </main>
  );
};

export const Head = () => <title>About Page</title>;

export default AboutPage;
