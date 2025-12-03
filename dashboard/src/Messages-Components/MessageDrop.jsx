import React from 'react';
import './MessageDrop.css';
import MailIcon from '../Assets/mail icon.svg'
const MessageDrop = () => {
    return ( 
   
<div className='Messagedrop'>

<img src={MailIcon} />
Select a message to view details
</div>

   );
}
 
export default MessageDrop;