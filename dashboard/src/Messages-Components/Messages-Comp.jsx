import React, { useEffect, useState } from 'react';
import './Messages-Comp.css';
import MessageCard from '../Messages-Components/MessageCard';
import { supabase } from '../Supabase';

const Messages = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('clients messages')
        .select('*');

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data);
      }
    };

    fetchMessages();
  }, []);

  // Status → UI style mapper
  const getStatusStyle = (status) => {
    if (status === 'Read') {
      return {
        bg: 'rgba(0, 182, 155, 0.22)', // teal
        color: '#062C2C',
      };
    }

    if (status === 'Unread') {
      return {
        bg: '#EFD1D1', // soft red
        color: '#062C2C',
      };
    }

    // fallback (safe default)
    return {
      bg: '#EAEAEA',
      color: '#333',
    };
  };

  if (!messages) {
    return <p>Loading messages...</p>;
  }

  return (
    <div className="MessagesBar">
      {messages.map((clientMessage) => {
        const statusStyle = getStatusStyle(clientMessage.status);

        return (
          <MessageCard
            key={clientMessage.id}
            image={clientMessage.Senders_pfp}
            name={clientMessage.name}
            time={clientMessage.time}
            title={clientMessage.title}
            message={clientMessage.message}
            status={clientMessage.status}
            statusBg={statusStyle.bg}
            statusColor={statusStyle.color}
          />
        );
      })}
    </div>
  );
};

export default Messages;
