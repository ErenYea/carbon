import { Routes, Route, Link } from "react-router-dom";
import Carbon from "./components/Carbon";

function App() {
  return (
    // Set up routing using the <Routes> component
    <Routes>
      {/* Define a route for the Carbon path */}
      <Route path="/carbon" exact element={<Carbon />} />
      {/* Define a route for the root path */}
      <Route path="/" exact element={<></>} />
    </Routes>
  );
}

export default App;
