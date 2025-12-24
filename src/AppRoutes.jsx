import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./Supabase";

import Profilepage from "./pages/Profile";
import Home from "./pages/Home";
import Messages from "./pages/Message";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import ProjectMangement from "./pages/ProjectMangement";
import SettingsForm from './pages/SettingsForm';
import Error404 from './pages/Error404';

const AppRoutes = () => {
  // ✅ Initialize with empty arrays so components can render safely
  const [portfolio, setPortfolio] = useState([]);
  const [profile, setProfile] = useState([]);
  const [clientMessages, setClientMessages] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [contactAndGit, setContactAndGit] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const { data, error } = await supabase.from("uxprojects").select("*");
      if (error) console.error("Error fetching projects:", error);
      else setPortfolio(data || []);
    };

    const fetchContactAndGit = async () => {
      const { data, error } = await supabase.from("contactandgit").select("*"); // ✅ match table name exactly
      if (error) console.error("Error fetching contact/git:", error);
      else setContactAndGit(data || []);
    };

    const fetchProfile = async () => {
      const { data, error } = await supabase.from("Profile").select("*");
      if (error) console.error("Error fetching profile:", error);
      else setProfile(data || []);
    };

    const fetchMessages = async () => {
      const { data, error } = await supabase.from('clients messages').select('*');
      if (error) console.error('Error fetching messages:', error);
      else setClientMessages(data);
    };

    const fetchTasks = async () => {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) console.error("Error fetching tasks:", error);
      else setTasks(data || []);
    };

    const fetchQuickActions = async () => {
      const { data, error } = await supabase.from("quickactions").select("*");
      if (error) console.error("Error fetching quick actions:", error);
      else setQuickActions(data || []);
    };

    // ✅ Call all fetches
    fetchProfile();
    fetchPortfolio();
    fetchMessages();
    fetchTasks();
    fetchQuickActions();
    fetchContactAndGit();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Home
              portfolio={portfolio}
                 clients_messages={clientMessages} 
              tasks={tasks}
              quickActions={quickActions}
            />
          }
        />
        <Route path="/projects" element={<Projects portfolio={portfolio} />} />
        <Route path="/messages" element={<Messages clients_messages={clientMessages} />} />
        <Route
          path="/profile"
          element={<Profilepage profile={profile} conatctandgit={contactAndGit} />}
        />
        <Route path="/projectmanagement" element={<ProjectMangement />} />
        <Route path="/settings" element={<SettingsForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
