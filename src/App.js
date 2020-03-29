import React from 'react';
import './App.css';

const linkedInUrl = "https://www.linkedin.com/in/anishgupta2/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, I'm Anish Gupta. I'm an undergraduate mathematics student at the University of Warwick.
        </p>
        <p>
          This website is a work in progress (probably for a while).
        </p>
        <p>
          In the meantime, you can <a 
            className="App-link"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            check out my LinkedIn
          </a>.
        </p>
      </header>
    </div>
  );
}

export default App;
