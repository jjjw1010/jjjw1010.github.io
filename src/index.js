import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import Intro from './Intro';
import CSProjects from './CSProjects';
import CEProjects from './CEProjects';
import Resume from './Resume';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

import '@fontsource/montserrat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Intro />
    <CSProjects />
    <CEProjects />
    <Resume />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
