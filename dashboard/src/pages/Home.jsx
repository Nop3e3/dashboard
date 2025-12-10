import React, { useState, useRef } from 'react';
import './Home.css';
import Arrow from '../Assets/arrowww.svg';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import Infographicsummary from '../Home-Components/StatsCard';
import ProjectCard from '../Home-Components/ProjectCard';
import Visitorsicon from '../Assets/visitors.svg';
import viewsicon from '../Assets/viewers.svg';
import newmessagesicon from '../Assets/new messages.svg';
import totalvisitors from '../Assets/total visitors.svg';
import ArrowButton from '../Home-Components/ArrowButton'
import TrafficAnalytics from "../Home-Components/TrafficAnalytics";
import TaskItem from '../Home-Components/TaskItem';
import Titlemini from '../Home-Components/Titlemini'
import Pfp1 from '../Assets/Frame 1000007593-1.png'
import Pfp2 from '../Assets/Frame 1000007593-2.png'
import Pfp3 from '../Assets/Frame 1000007593.png'
import Pfp6 from '../Assets/Frame 1000007594.png'
import Pfp5 from '../Assets/Frame 1000007593-3.png'
import Pfp4 from '../Assets/Frame 1000007594-1.png'
import QuickActions from '../Home-Components/QuickActions';
import MessageCard from'../Messages-Components/MessageCard';
const Home = () => {

  // --------------------------
  // Traffic Analytics Data
  // --------------------------
  const data = [
    { day: "Fri", visits: 130 },
    { day: "Sat", visits: 180 },
    { day: "Sun", visits: 150 },
    { day: "Mon", visits: 300 },
    { day: "Tues", visits: 280 },
    { day: "Wed", visits: 420 },
    { day: "Thurs", visits: 230 },
  ];

  return (
    <div className='mainconj'>
      <Sidebar />

      <div className='mainpage'>
        <Pagetitle title="Dashboard" />

        <div className='rowstats'>
          <Infographicsummary
            title="Visitors Today"
            value="40,689"
            change="+8.5%"
            changeLabel="Up from yesterday"
            icon={Visitorsicon}
          />

          <Infographicsummary
            title="Most Viewed Project"
            value="Sugar Pop..."
            change="+1,500 total view"
            icon={viewsicon}
          />

          <Infographicsummary
            title="New Messages"
            value="43"
            redChange="-8.5%"
            redLabel="Compared to yesterday"
            icon={newmessagesicon}
          />

          <Infographicsummary
            title="Total Visitors"
            value="98,420"
            change="+5.1%"
            changeLabel="This week"
            icon={totalvisitors}
          />
        </div>

        {/* Traffic Analytics Chart */}
        <div className='rowww22'>
            <div className='collycon'>
          <TrafficAnalytics data={data} />

<div className='rowww22'>      
    <div className='collycon2'>
             <Titlemini
              title="Tasks"
            />
         <TaskItem 
        title="Publish the new web" 
        time="In 5 Days" 
        color="green" 
        
      />
         <TaskItem 
        title="Branding" 
        time="In 2 hours" 
        color="pink" 
        
      />
          <TaskItem 
        title="Branding 2" 
        time="In 2 days" 
        color="beige" 
        
      />
          </div>

           <div className='collycon2'>
             <Titlemini
              title="Quick Actions"
            />
  <QuickActions
  text="Add New Project"
  />
    <QuickActions
  text="Add New Category"
  />
    <QuickActions
  text="Add New Skill"
  />
    <QuickActions
  text="Add New Contact Info"
  />
   <QuickActions
  text="Edit Brief 1"
  />

          </div>
          </div>    
          </div>
          <div className='collycon'>
          <div className='colly'>

            <Titlemini
              title="Top Projects"
            />
  <ProjectCard 
        rank="1"
        rankBgColor="#d1f2eb"   /* Light Teal Background */
        rankTextColor="#00bfa5" /* Dark Teal Text */
        title="Sugar Pop: Pop Culture E-Magazine"
        score="1,500"
        tag1Text="UX Design"
        tag1Color="yellow"
        tag2Text="UX Research"
        tag2Color="pink"
      />
        <ProjectCard 
        rank="2"
        rankBgColor="#D3F1FF"   /* Light Teal Background */
        rankTextColor="#16B1FF" /* Dark Teal Text */
        title="Verro: AI Art Mentor"
        score="1,400"
        tag1Text="UX Design"
        tag1Color="yellow"
        tag2Text="UX Research"
        tag2Color="pink"
      />
      
        <ProjectCard 
        rank="3"
        rankBgColor="#FFE2D4"   /* Light Teal Background */
        rankTextColor="#FF854C" /* Dark Teal Text */
        title="Giza Zoo website"
        score="1,500"
        tag1Text="UX Design"
        tag1Color="yellow"
        tag2Text="UX Research"
        tag2Color="pink"
      />
      <ArrowButton
      text="View all"
      icon={Arrow}/>
      </div>
       <div className='colly'>

            <Titlemini
              title="Messages"
            />

 
 <MessageCard
   image={Pfp1}
   name="John Doe"
   time="2:00PM"
   title="Project Inquiry"

   status="Read"
   statusBg="rgba(0, 182, 155, 0.22)"   // teal like the image
   statusColor="#062C2C"  // optional
 />
 <MessageCard
   image={Pfp2}
   name="Adam Smith"
   time="2:00PM"
   title="Project Inquiry"

   status="Read"
   statusBg="rgba(0, 182, 155, 0.22)"   // teal like the image
   statusColor="#062C2C"  // optional
 />
 <MessageCard
   image={Pfp4}
   name="Yasmine Q"
   time="2:00PM"
   title="Project Inquiry"

    status="Unread"
   statusBg=" #EFD1D1"    // teal like the image
   statusColor="#062C2C"  // optional
 />

 

      <ArrowButton
      text="View all"
      icon={Arrow}/>
      </div></div>
        </div>

      </div>
    </div>
  );
};

export default Home;
