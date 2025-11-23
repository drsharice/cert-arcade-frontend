import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CertDetail from "./pages/CertDetail";
import Level1 from "./pages/Level1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cert/:certId" element={<CertDetail />} />
        <Route path="/cert/:certId/level1" element={<Level1 />} />

      </Routes>
    </BrowserRouter>
  );
}
