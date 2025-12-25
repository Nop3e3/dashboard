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
  // Initialize state
  const [portfolio, setPortfolio] = useState([]);
  const [projectfield, setProjectfield] = useState([]);
  const [profile, setProfile] = useState([]);
  const [clientMessages, setClientMessages] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [contactAndGit, setContactAndGit] = useState([]);

  useEffect(() => {
    // Fetch projects
    const fetchPortfolio = async () => {
      const { data, error } = await supabase.from("uxprojects").select("*");
      if (error) console.error("Error fetching projects:", error);
      else setPortfolio(data || []);
    };

    // Fetch project fields
 const fetchProjectfield = async () => {
  const { data, error } = await supabase.from("Projectfields").select("*"); // <-- exact table name in Supabase
  if (error) console.error("Error fetching project fields:", error);
  else setProjectfield(data || []);
};


    // Fetch profile
   const fetchProfile = async () => {
  const { data, error } = await supabase.from("Profile").select("*"); // <-- exact table name in Supabase
  if (error) console.error("Error fetching profile:", error);
  else setProfile(data || []);
};

    // Fetch messages
    const fetchMessages = async () => {
      const { data, error } = await supabase.from("clients_messages").select("*"); // ✅ match table name
      if (error) console.error("Error fetching messages:", error);
      else setClientMessages(data || []);
    };

    // Fetch tasks
    const fetchTasks = async () => {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) console.error("Error fetching tasks:", error);
      else setTasks(data || []);
    };

    // Fetch quick actions
    const fetchQuickActions = async () => {
      const { data, error } = await supabase.from("quick_actions").select("*");
      if (error) console.error("Error fetching quick actions:", error);
      else setQuickActions(data || []);
    };

    // Fetch contact & Git info
    const fetchContactAndGit = async () => {
      const { data, error } = await supabase.from("Contactandgit").select("*");
      if (error) console.error("Error fetching contact/git:", error);
      else setContactAndGit(data || []);
    };

    // Call all fetches
    fetchProjectfield();
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
              clientMessages={clientMessages}
              tasks={tasks}
              quickActions={quickActions}
            />
          }
        />
        <Route path="/projects" element={<Projects portfolio={portfolio} />} />
        <Route path="/messages" element={<Messages clientMessages={clientMessages} />} />
        <Route
          path="/profile"
          element={<Profilepage profile={profile} contactAndGit={contactAndGit} />}
        />
        <Route
          path="/projectmanagement"
          element={<ProjectMangement projectfield={projectfield} />}
        />
        <Route path="/settings" element={<SettingsForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
