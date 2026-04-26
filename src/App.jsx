import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import SpaceScene from './scenes/SpaceScene';
import { personalInfo } from './data/portfolioData';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function LoadingFallback() {
  return (
    <div className="section-loading">
      <div className="loading-spinner" />
    </div>
  );
}

function App() {
  return (
    <>
      <SpaceScene />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      
      <a href={personalInfo.resumeUrl} download className="floating-resume-btn btn btn-primary">
        <span className="btn-glow" />
        Resume
      </a>

      <main className="main-content">
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;