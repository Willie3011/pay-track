import { Routes, Route } from "react-router";
import Homepage from "./pages/homepage";
import HomeLayout from "./Layouts/HomeLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route index path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
        <Route path="/how-it-works" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
