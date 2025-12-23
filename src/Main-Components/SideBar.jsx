// src/components/Sidebar.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import MenuButton from './MenuButton';
import AddButton from './AddButton';


import DashboardIcon  from '../Assets/dashboard-icon.svg';
import ProfileIcon  from '../Assets/account_circle.svg';
import MessagesIcon  from '../Assets/message.svg';
import SettingsIcon  from '../Assets/settings.svg';
import ProjectManagementIcon  from '../Assets/assignmenticon.svg';
import PlusIcon  from '../Assets/add.svg';

const Sidebar = () => {
  const location = useLocation(); // get current path

  return (
    <nav className='nav'>
      <AddButton icon={PlusIcon} title="Add Project" />

      <MenuButton
        icon={DashboardIcon}
        title="Dashboard"
        to="/home"
        picked={location.pathname === '/home'}
      />
      <MenuButton
      
          icon={ProjectManagementIcon}
        title="Project Management"
        to="/projects"
        picked={location.pathname === '/projects'}
      />
      <MenuButton
        icon={ProfileIcon}
        title="Profile"
        to="/profile"
        picked={location.pathname === '/profile'}
      />
      <MenuButton
        icon={MessagesIcon}
        title="Messages"
        to="/messages"
        picked={location.pathname === '/messages'}
      />
      <MenuButton
        icon={SettingsIcon}
        title="Settings"
      to="/settings"
        picked={location.pathname === '/settings'}
      
      />
    </nav>
  );
};

export default Sidebar;