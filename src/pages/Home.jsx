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
       import ArrowButton from '../Home-Components/ArrowButton' ;
       import TrafficAnalytics from "../Home-Components/TrafficAnalytics";
        import TaskItem from '../Home-Components/TaskItem'; 
        import Titlemini from '../Home-Components/Titlemini' ;
        import QuickActions from '../Home-Components/QuickActions'; 
        import MessageCard from'../Messages-Components/MessageCard';
const Home = ({ portfolio, clients_messages, quickActions, tasks }) => {

  const sortedProjects = portfolio ? [...portfolio].sort((a, b) => a.Rank - b.Rank) : [];

  return (
    <div className='mainconj'>
      <Sidebar />
      <div className='mainpage'>
        <Pagetitle title="Dashboard" />

        {/* Stats */}
        <div className='rowstats'>
        <Infographicsummary title="Visitors Today" value="40,689" change="+8.5%" changeLabel="Up from yesterday" icon={Visitorsicon} />
         <Infographicsummary title="Most Viewed Project" value="Sugar Pop..." change="+1,500 total view" icon={viewsicon} /> 
         <Infographicsummary title="New Messages" value="43" redChange="-8.5%" redLabel="Compared to yesterday" icon={newmessagesicon} /> 
         <Infographicsummary title="Total Visitors" value="98,420" change="+5.1%" changeLabel="This week" icon={totalvisitors} /> 
         </div> 

        {/* Traffic & Actions */}
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
              {/* Tasks */}
              <div className='collycon2'>
                <Titlemini title="Tasks" />
                {tasks && tasks.map(task => {
                  const isDone = task.Task_Status.toLowerCase() === 'done';
                  return (
                    <TaskItem
                      key={task.id}
                      title={task.Tasks_Title}
                      time={task.Task_Due_Date}
                      color={isDone ? 'green' : 'pink'}
                    />
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className='collycon2'>
                <Titlemini title="Quick Actions" />
                {quickActions && quickActions.map(action => (
                  <QuickActions key={action.id} text={action.quickaction.trim()} />
                ))}
              </div>
            </div>
          </div>

          {/* Projects & Messages */}
          <div className='collycon'>
            {/* Top Projects */}
            <div className='colly'>
              <Titlemini title="Top Projects" />
              {sortedProjects.slice(0, 3).map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  viewCount={project.view_count ?? 0}
                  coverImage={project.cover_image}
                  rank={project.Rank}
                  tag1Text={project.category1}
                  tag1Color="yellow"
                  rankBgColor={project.bg_color}
                  rankTextColor={project.txt_color}
                  score={project.view_count}
                  tag2Text={project.category2}
                  tag2Color="pink"
                />
              ))}
              <ArrowButton text="View all" icon={Arrow} />
            </div>

            {/* Messages */}
            <div className='colly'>
              <Titlemini title="Messages" />
              {clients_messages && clients_messages.slice(0, 3).map(msg => (
                <MessageCard
                  key={msg.id}
                  image={msg.Senders_pfp}
                  name={msg.name}
                  time={msg.time}
                  title={msg.title}
                  message={msg.message}
                  status={msg.status}
                  statusBg={msg.status.toLowerCase() === "unread" ? "#EFD1D1" : "rgba(0, 182, 155, 0.22)"}
                  statusColor="#062C2C"
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
