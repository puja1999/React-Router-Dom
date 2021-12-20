import React from "react";
import { useHistory } from "react-router-dom";

function About() {
    let history = useHistory();
    const handleRedirect = () => {
        history.push('/');
    }
  return (
    <div>
      <h2>This is the About page</h2>
     <div className="page-content">
     <h3 onClick={handleRedirect}>Back to home</h3>
      </div>
    </div>
  );
}

export default About;
