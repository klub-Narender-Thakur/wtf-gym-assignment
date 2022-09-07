import { Routes, Route } from "react-router-dom";
import { Gym,Home } from "../views";
import { Navbar, Footer } from "../components/common";
import { ErrorPage } from "../components/common";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/nutrition" element={<ErrorPage />} />
        <Route path="/fitness" element={<ErrorPage />} />
        <Route path="/become-WTF-Partner" element={<ErrorPage />} />
        <Route path="/about" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}
