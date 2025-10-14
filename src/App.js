import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/views/index";

import {
  Experience,
  Figma,
  Videogames,
  Pokemon,
  Food,
  Dogs,
  Rick,
  Countries,
} from "../src/components/index";

function App() {
  return (
    <div className="App">
      <Routes>
        {" "}
        {/* Estoy usando routes por que react router dom en las versiona anterioes de 5 hacia atras no usaba "Routes" por eso lo llamaban de una manera diferente con solo "route" */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/figma" element={<Figma />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/videogames" element={<Videogames />} />
        <Route exact path="/Pokemon" element={<Pokemon />} />
        <Route exact path="/food" element={<Food />} />
        <Route exact path="/dogs" element={<Dogs />} />
        <Route exact path="/rick" element={<Rick />} />
        <Route exact path="/countries" element={<Countries />} />
        {/*    <Route exact path="/navbar" element={<NavBar />} /> */}
      </Routes>
    </div>
  );
}

export default App;
