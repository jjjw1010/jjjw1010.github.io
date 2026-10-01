import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import Content from './Content';
import Projects from './Projects';
import Footer from './Footer';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Nav />
    <main id="main-content" tabIndex={-1}>
      <Content />
      <Projects />
    </main>
    <Footer />
  </React.StrictMode>
);
