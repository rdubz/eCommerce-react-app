import React from "react";

interface HomeProps {
    test: string;
    another: string;
}

function Home({test, another}:HomeProps) {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>This is the Home Page</h1>
        <h3>{test}</h3>
        <h5>{another}</h5>
      </header>
    </div>
  );
}

export default Home;
