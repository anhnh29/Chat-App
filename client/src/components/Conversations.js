import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from '../contexts/ConversationsProvider';

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();
  console.log('conversationssss',conversations);
  return (
        <ListGroup variant="flush">
      {conversations.map((conversation,index) => (
        <ListGroup.Item key={index}
          action
          onClick={() => { selectConversationIndex(index) }}
          active={conversation.selected}
        >
          {conversation.recipients.map((recipient, index) => recipient.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
};

export default Conversations;
