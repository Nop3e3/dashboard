import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profilepage from "./pages/Profile";
import Home from "./pages/Home";
import Messages from "./pages/Message"
import Projects from "./pages/Projects"
import Login from "./pages/Login";
import ProjectMangement from "./pages/ProjectMangement";
import SettingsForm from './pages/SettingsForm';
import Error404 from './pages/Error404';
import { supabase } from "./Supabase";
import { useEffect, useState } from "react";




const AppRoutes = () => {
  const [portfolio, setPortfolio] = useState(null)
useEffect(() => {
  const fetchPortfolio = async () => {
    const { data, error } = await supabase
      .from('uxprojects')
      .select('*')

    if (error) {
      console.error(error)
    } else {
      console.log('DATA:', data)
      setPortfolio(data)
    }
  }

  fetchPortfolio()
}, [])

  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/projectmanagement" element={<ProjectMangement />} />
          <Route path="*" element={<Error404 />} />
        <Route path="/settings" element={<SettingsForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      <Route path="/projects" element={<Projects portfolio={portfolio} />} />          
 <Route path="/profile" element={<Profilepage />} />
 <Route path="/messages" element={<Messages/>} />
 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
