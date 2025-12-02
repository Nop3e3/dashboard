import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Messages from "./pages/Message"
import Login from "./pages/Login";


const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
 <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
