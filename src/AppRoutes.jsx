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
  // State
  const [portfolio, setPortfolio] = useState([]);
  const [projectfield, setProjectfield] = useState([]);
  const [profile, setProfile] = useState([]);
  const [clientMessages, setClientMessages] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [contactAndGit, setContactAndGit] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          { data: portfolioData, error: portfolioError },
          { data: projectfieldData, error: projectfieldError },
          { data: profileData, error: profileError },
          { data: messagesData, error: messagesError },
          { data: tasksData, error: tasksError },
          { data: quickActionsData, error: quickActionsError },
          { data: contactAndGitData, error: contactAndGitError },
        ] = await Promise.all([
          supabase.from("uxprojects").select("*"),          // ✅ check table name in Supabase
          supabase.from("Projectfields").select("*"),       // ✅ fixed: exact table name
          supabase.from("Profile").select("*"),             // ✅ match your actual table name
          supabase.from("ClientsMessages").select("*"),     // ✅ match your actual table name
          supabase.from("Tasks").select("*"),               // ✅ match your actual table name
          supabase.from("Quickactions").select("*"),        // ✅ match your actual table name
          supabase.from("Contactandgit").select("*"),       // ✅ match your actual table name
        ]);

        if (portfolioError) console.error("Error fetching uxprojects:", portfolioError);
        if (projectfieldError) console.error("Error fetching Projectfields:", projectfieldError);
        if (profileError) console.error("Error fetching Profile:", profileError);
        if (messagesError) console.error("Error fetching ClientsMessages:", messagesError);
        if (tasksError) console.error("Error fetching Tasks:", tasksError);
        if (quickActionsError) console.error("Error fetching Quickactions:", quickActionsError);
        if (contactAndGitError) console.error("Error fetching Contactandgit:", contactAndGitError);

        setPortfolio(portfolioData || []);
        setProjectfield(projectfieldData || []);
        setProfile(profileData || []);
        setClientMessages(messagesData || []);
        setTasks(tasksData || []);
        setQuickActions(quickActionsData || []);
        setContactAndGit(contactAndGitData || []);
      } catch (err) {
        console.error("Unexpected error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
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
          element={<Profilepage profile={profile} contactAndGit={contactAndGit} />}
        />
        <Route
          path="/projectmanagement"
          element={<ProjectMangement projectfield={projectfield} loading={loading} />}
        />
        <Route path="/settings" element={<SettingsForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
