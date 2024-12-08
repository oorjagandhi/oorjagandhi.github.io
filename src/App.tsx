import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <section id="intro"></section>
      <Intro />
      <section id="about"></section>
      <AboutMe />
      <section id="projects"></section>
      <Projects />
      <Footer />
    </div>
  )
}

export default App