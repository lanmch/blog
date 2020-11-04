import React from 'react';
import './App.css';
import Nav from './components/nav';
import HomePage from './pages/index';
import Catalogue from './pages/catalogue';
import Article from './pages/article';
import Pigeonhole from './pages/pigeonhole';
function App() {
  return (
    <div className="App">
      {/* <Nav />
      <HomePage /> */}
      {/* <Catalogue /> */}
      <Article />
      {/* <Pigeonhole /> */}
    </div>
  );
}

export default App;
