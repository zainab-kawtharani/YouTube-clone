import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components";
import { Home,Video } from "./pages";
import { useState } from "react";
function App() {
  const [sidebar,setSidebar] = useState(true);

  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
      </Routes>
    </>
  )
}

export default App
