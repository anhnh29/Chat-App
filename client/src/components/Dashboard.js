import React from "react";
import SideBar from './SideBar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

const Dashboard = ({ id }) => {
  
  const { selectedConversation } = useConversations();

  return <div className="d-flex" style={{ height: '100vh' }}> 
    <SideBar id={id} />
    {selectedConversation && (
      <OpenConversation />  
    )} 
  </div>;
};

export default Dashboard;
