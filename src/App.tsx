import React from 'react';
import './App.css';
import Nav from './components/nav';
import HomePage from './pages/index';
import Catalogue from './pages/catalogue';
import Article from './pages/article';
function App() {
  return (
    <div className="App">
      {/* <Nav />
      <HomePage /> */}
      {/* <Catalogue /> */}
      <Article />
    </div>
  );
}

export default App;
