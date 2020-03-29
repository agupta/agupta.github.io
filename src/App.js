import React from 'react';
import './App.css';

import ReactGA from 'react-ga';


// Google Analytics
const gaTrackingId = 'UA-162153275-1';

ReactGA.initialize(gaTrackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

// App
const linkedInUrl = 'https://www.linkedin.com/in/anishgupta2/';
const gitHubUrl = 'https://github.com/agupta';

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
          In the meantime, you can check out my <ReactGA.OutboundLink
            className="App-link"
            eventLabel="LinkedIn-Clicked"
            to={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ReactGA.OutboundLink> and <ReactGA.OutboundLink
            className="App-link"
            eventLabel="GitHub-Clicked"
            to={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ReactGA.OutboundLink>.
        </p>
      </header>
    </div>
  );
}

export default App;