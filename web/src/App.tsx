import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/index';
import Catalogue from './pages/catalogue';
import Article from './pages/article';
import Pigeonhole from './pages/pigeonhole';
import PhotoWall from './pages/photo-wall';
import Essays from './pages/essays';
import AboutMe from './pages/about-me';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/article" component={Article} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/pigeonhole" component={Pigeonhole} />
        <Route path="/photowall" component={PhotoWall} />
        <Route path="/essays" component={Essays} />
        <Route path="/aboutme" component={AboutMe} />
      </BrowserRouter>
    </div>
  );
}

export default App;
