import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer'; // Import the VideoPlayer component

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simple Player App</h1>
      <VideoPlayer />
    </div>
  );
};

export default App;