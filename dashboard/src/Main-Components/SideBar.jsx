import React from 'react';
import './Sidebar.css';
import MenuButton from '../Main-Components/MenuButton';
import Projectmanagement from '../Assets/assignment.svg';
import PickedButton from'../Main-Components/PickedButton';
import settings from '../Assets/settings.svg';
import profileicon from '../Assets/Profile icon.svg';
import messagesicon from '../Assets/Messages icon colored.svg';
import dasboardicon from '../Assets/dashboard-icon.svg';
import AddButton from '../Main-Components/AddButton'
import plusicon from '../Assets/add.svg'
const Sidebar = () => {
    return ( 
   
<nav className='nav'>
<AddButton
 icon={plusicon}
  title="Add Project"/>
<MenuButton
  icon={dasboardicon}
  title="Dashboard"
  to="/home"
/>
<MenuButton
  icon={profileicon}
  title="Project Mangement"
  to="/profile"
/>
<MenuButton
  icon={Projectmanagement}
  title="Profile"
  to="/profile"
/>  
  <PickedButton
  icon={messagesicon}
  title="Messages"

/>
<MenuButton
  icon={settings}
  title="Settings"

/>


</nav>

   );
}
 
export default Sidebar;