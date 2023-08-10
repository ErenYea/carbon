import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Carbon from "./components/Carbon";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Carbon />
          </>
        }
      />
    </Routes>
  );
}

export default App;
