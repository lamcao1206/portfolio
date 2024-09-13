import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}
