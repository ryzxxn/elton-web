import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
import Blog from './pages/blog';
import memoryState from 'memory-state';
import { utilData } from './data/util_data';
import { projectData } from './data/project_data'

function App() {
  const stack = utilData
  const project = projectData
  memoryState.setState('stack', stack)
  memoryState.setState('project', project)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
