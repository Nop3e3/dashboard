import React from 'react';
import './Messages.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar'; 
import Messagesrates from '../Messages-Components/Message-Rates';
import MessageDrop from '../Messages-Components/MessageDrop'
import MessageComp from'../Messages-Components/Messages-Comp';
const Messages = () => {
    return ( 
    <div className='mainconj'>
<Sidebar/>
<div className='mainpage'>
    <Pagetitle
      title="Messages"
        /> <div className="Messages-row">
        <Messagesrates
title="6"
content="Total Messages"
/>
       <Messagesrates
title="3"
content="Unread"
/>
       <Messagesrates
title="3"
content="Read"
/></div>
<div className='downcomps'>
    <MessageComp/>
    <MessageDrop/>
</div>

</div>

    </div> );
}
 
export default Messages;