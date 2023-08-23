import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPages from "./routes/IndexPages";
import Videos from "./routes/Videos";
import Teacher from "./routes/Teacher";
import About from "./routes/About";
import Cursos from "./routes/Cursos";
import Layout from "./Layout";
import Error404 from "./routes/Error404";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPages />} />

          <Route path="/" element={<Layout />}>
            <Route path="/videos" element={<Videos />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/contactanos" element={<About />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* teacher videos categoria  cursos markeing diseño*/
}
