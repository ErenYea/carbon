import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Carbon from "./components/Carbon";

function App() {
  return (
    // Set up routing using the <Routes> component
    <Routes>
      {/* Define a route for the root path */}
      <Route path="/" element={<></>} />
      {/* Define a route for the Carbon path */}
      <Route path="/carbon" element={<Carbon />} />
    </Routes>
  );
}

export default App;
