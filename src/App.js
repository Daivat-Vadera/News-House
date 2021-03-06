import './App.css';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            exact
            index
            element={
              <NewsContainer
                setProgress={setProgress}
                key="general"
                country="IN"
                category="news"
              />
            }
          />
          <Route
            exact
            path="sport"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="sport"
                country="IN"
                category="sport"
              />
            }
          />
          <Route
            exact
            path="technology"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="technology"
                country="IN"
                category="tech"
              />
            }
          />
          <Route
            exact
            path="world"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="world"
                country="IN"
                category="world"
              />
            }
          />
          <Route
            exact
            path="finance"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="finance"
                country="IN"
                category="finance"
              />
            }
          />
          <Route
            exact
            path="politics"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="politics"
                country="IN"
                category="politics"
              />
            }
          />
          <Route
            exact
            path="business"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="business"
                country="IN"
                category="business"
              />
            }
          />
          <Route
            exact
            path="economics"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="economics"
                country="IN"
                category="economics"
              />
            }
          />
          <Route
            exact
            path="entertainment"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="entertainment"
                country="IN"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="beauty"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="beauty"
                country="IN"
                category="beauty"
              />
            }
          />
          <Route
            exact
            path="travel"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="travel"
                country="IN"
                category="travel"
              />
            }
          />
          <Route
            exact
            path="music"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="music"
                country="IN"
                category="music"
              />
            }
          />
          <Route
            exact
            path="food"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="food"
                country="IN"
                category="food"
              />
            }
          />
          <Route
            exact
            path="science"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="science"
                country="IN"
                category="science"
              />
            }
          />
          <Route
            exact
            path="gaming"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="gaming"
                country="IN"
                category="gaming"
              />
            }
          />
          <Route
            exact
            path="energy"
            element={
              <NewsContainer
                setProgress={setProgress}
                key="energy"
                country="IN"
                category="energy"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
