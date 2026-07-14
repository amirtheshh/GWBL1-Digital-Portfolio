import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Journey from "./pages/Journey"
import Reflection from "./pages/Reflection"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/reflection" element={<Reflection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
