import { useState } from 'react'
import './App.css'
import ProjectBoxWrapper from './components/ProjectBoxWrapper'
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <ProjectBoxWrapper />
      </div>
    </>
  )
}

export default App
