import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>Verbessern</h1>
      <h2>
        Verbessern means "To imprve". I will try to improve my knowledge on
        writing about frontend technologies, patterns, best practices, and much
        more. You can improve yours by reading about it
      </h2>
      <Link to="aboutPage">About</Link>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
