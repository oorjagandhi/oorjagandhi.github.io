import React from 'react'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Intro />
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App