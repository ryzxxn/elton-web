import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Project from "./pages/project";
import Home from "./pages/home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
