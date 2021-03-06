import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>About</h1>
        <p>Technologies Used</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>Node</li>
          <li>Mapbox API</li>
          <li>Material UI (MUI)</li>
        </ul>
        <p>Challenges</p>
        <ul>
          <li>Mapbox API</li>
          <li>GPX/GEOJSON Files</li>
        </ul>
        <p>Thanks To</p>
        <ul>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
