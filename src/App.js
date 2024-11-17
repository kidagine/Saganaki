import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const clipboardData = query.get('data');

  return (
    <div>
      <h1>Clipboard Data</h1>
      {clipboardData ? (
        <p>Clipboard content: {clipboardData}</p>
      ) : (
        <p>No data received.</p>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
