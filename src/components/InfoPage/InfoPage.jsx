import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InfoPage() {
  return (
    <div className="container">
      <div>
        <h1>Resources</h1>
        <p>St. Croix River</p>
        <ul>
          <li><a href="https://www.nps.gov/sacn/index.htm">National Parks Service Site St. Croix</a></li>
        </ul>
        <p>Missisippi River</p>
        <ul>
          <li><a href="https://www.nps.gov/miss/index.htm">National Parks Service Site Missisippi</a></li>
        </ul>
      </div>
    </div>
  );
}

export default InfoPage;
