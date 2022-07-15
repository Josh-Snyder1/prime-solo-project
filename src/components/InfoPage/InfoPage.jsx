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
          <li>MN DNR Site Link</li>
          <li>Other Links</li>
        </ul>
        <p>Missisippi River</p>
        <ul>
          <li>MN DNR Site Link</li>
          <li>Other Links</li>
        </ul>
        <p>Thanks To</p>
        <ul>
          <li>Me</li>
          <li>Also Me</li>
        </ul>
      </div>
    </div>
  );
}

export default InfoPage;
