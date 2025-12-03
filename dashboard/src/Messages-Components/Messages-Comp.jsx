import React from 'react';
import './Messages-Comp.css';
import Pfp1 from '../Assets/Frame 1000007593-1.png'
import Pfp2 from '../Assets/Frame 1000007593-2.png'
import Pfp3 from '../Assets/Frame 1000007593.png'
import Pfp6 from '../Assets/Frame 1000007594.png'
import Pfp5 from '../Assets/Frame 1000007593-3.png'
import Pfp4 from '../Assets/Frame 1000007594-1.png'
import MessageCard from'../Messages-Components/MessageCard';
const Messages = () => {
    return ( 

<div className='MessagesBar'>

<MessageCard
  image={Pfp1}
  name="John Doe"
  time="2:00PM"
  title="Project Inquiry"
  message="Hi! I came across your portfolio and was really impressed with your work..."
  status="Read"
  statusBg="rgba(0, 182, 155, 0.22)"   // teal like the image
  statusColor="#062C2C"  // optional
/>
<MessageCard
  image={Pfp2}
  name="Adam Smith"
  time="2:00PM"
  title="Project Inquiry"
  message="Hi! I came across your portfolio and was really impressed with your work..."
  status="Read"
  statusBg="rgba(0, 182, 155, 0.22)"   // teal like the image
  statusColor="#062C2C"  // optional
/>
<MessageCard
  image={Pfp4}
  name="Yasmine Q"
  time="2:00PM"
  title="Project Inquiry"
  message="Hi! I came across your portfolio and was really impressed with your work..."
   status="Unread"
  statusBg=" #EFD1D1"    // teal like the image
  statusColor="#062C2C"  // optional
/>
<MessageCard
  image={Pfp3}
  name="Liam Grace"
  time="2:00PM"
  title="Project Inquiry"
  message="Hi! I came across your portfolio and was really impressed with your work..."
  status="Unread"  
  statusBg=" #EFD1D1"    // teal like the image
  statusColor="#062C2C"
/>
<MessageCard
  image={Pfp6}
  name="Mohammed Abdou"
  time="2:00PM"
  title="Project Inquiry"
  message="Hi! I came across your portfolio and was really impressed with your work..."
  status="Read"
  statusBg="rgba(0, 182, 155, 0.22)"   // teal like the image
  statusColor="#062C2C"  // optional
/>
<MessageCard
  image={Pfp5}
  name="Joanne Peters"
  time="2:00PM"
  title="Project Inquiry"
  message="Hi! I came across your portfolio and was really impressed with your work..."
  status="Unread"
  statusBg=" #EFD1D1"    // teal like the image
  statusColor="#062C2C" // optional
/>

</div> );
}
 
export default Messages;