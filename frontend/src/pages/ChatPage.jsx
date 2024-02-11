import axios from "axios";
import React, { useEffect } from "react";

const ChatPage = () => {
  const fetchChats = async () => {
    const data = await axios.get("http://localhost:5000/api/chats");
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return <div>ChatPage</div>;
};

export default ChatPage;
