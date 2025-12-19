import React from 'react';
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
import QuickActions from '../Home-Components/QuickActions';
import MessageCard from'../Messages-Components/MessageCard';

const Home = ({ portfolio, clients_messages }) => {
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
            <TrafficAnalytics data={[
              { day: "Fri", visits: 130 },
              { day: "Sat", visits: 180 },
              { day: "Sun", visits: 150 },
              { day: "Mon", visits: 300 },
              { day: "Tues", visits: 280 },
              { day: "Wed", visits: 420 },
              { day: "Thurs", visits: 230 },
            ]} />

            <div className='rowww22'>
              <div className='collycon2'>
                <Titlemini title="Tasks" />
                <TaskItem title="Publish the new web" time="In 5 Days" color="green" />
                <TaskItem title="Branding" time="In 2 hours" color="pink" />
                <TaskItem title="Branding 2" time="In 2 days" color="beige" />
              </div>

              <div className='collycon2'>
                <Titlemini title="Quick Actions" />
                <QuickActions text="Add New Project" />
                <QuickActions text="Add New Category" />
                <QuickActions text="Add New Skill" />
                <QuickActions text="Add New Contact Info" />
                <QuickActions text="Edit Brief 1" />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className='collycon'>
            <div className='colly'>
              <Titlemini title="Top Projects" />
              {portfolio && portfolio.slice(0, 3).map((uxprojects) => (
                <ProjectCard
                  key={uxprojects.id}
                  title={uxprojects.title}
                  viewCount={uxprojects.view_count ?? 0}
                  coverImage={uxprojects.cover_image}
                  rank={uxprojects.Rank}
                  tag1Text={uxprojects.category1}
                  tag1Color="yellow"
                  score={uxprojects.view_count}
                  tag2Text={uxprojects.category2}
                  tag2Color="pink"
                />
                
              ))}
              <ArrowButton text="View all" icon={Arrow} />
            </div>

            {/* Messages */}
            <div className='colly'>
              <Titlemini title="Messages" />
              {clients_messages && clients_messages.slice(0, 3).map((msg) => (
                <MessageCard
                  key={msg.id}
                  image={msg.Senders_pfp}
                  name={msg.name}
                  time={msg.time}
                  title={msg.title}
                  message={msg.message}
                  status={msg.status}
                 
                />
              ))}
              <ArrowButton text="View all" icon={Arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
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
     {portfolio.map((uxprojects) => (
            <ProjectCard
              key={uxprojects.id}
              title={uxprojects.title}
              viewCount={uxprojects.view_count ?? 0}
              coverImage={uxprojects.cover_image}
        rank={uxprojects.r}
                 tag1Text={uxprojects.category1}
              tag1Color="tag-design"
              tag2Text={uxprojects.category2}
              tag2Color="tag-research"
            />
          ))}
      //   <ProjectCard 
      //   rank="2"
      //   rankBgColor="hsla(200, 100%, 91%, 1.00)"   /* Light Teal Background */
      //   rankTextColor="#16B1FF" /* Dark Teal Text */
      //   title="Verro: AI Art Mentor"
      //   score="1,400"
        //       rankBgColor="#d1f2eb"   /* Light Teal Background */
        // rankTextColor="#00bfa5" /* Dark Teal Text */
      //   tag1Text="UX Design"
      //   tag1Color="yellow"
      //   tag2Text="UX Research"
      //   tag2Color="pink"
      // />
      
      //   <ProjectCard 
      //   rank="3"
      //   rankBgColor="#FFE2D4"   /* Light Teal Background */
      //   rankTextColor="#FF854C" /* Dark Teal Text */
      //   title="Giza Zoo website"
      //   score="1,500"
      //   tag1Text="UX Design"
      //   tag1Color="yellow"
      //   tag2Text="UX Research"
      //   tag2Color="pink"
      // />