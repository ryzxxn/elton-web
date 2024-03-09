import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Resume from './pages/resume'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
