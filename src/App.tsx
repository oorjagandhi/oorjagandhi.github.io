import React from 'react'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <section id="intro"></section>
      <Intro />
      <section id="about"></section>
      <AboutMe />
      <section id="projects"></section>
      <Projects />
    </div>
  )
}

export default App