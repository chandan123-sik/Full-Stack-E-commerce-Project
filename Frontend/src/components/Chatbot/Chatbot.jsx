import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatWindow from "./ChatWindow";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋! How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);

  // Toggle chatbot window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Send message to backend
  const sendMessage = async (message) => {
    if (!message.trim()) return;

    // add user msg
    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { sender: "bot", text: data.reply || "Sorry, I didn’t get that." },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ChatbotButton toggleChat={toggleChat} />
      {isOpen && (
        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
          loading={loading}
          toggleChat={toggleChat}
        />
      )}
    </div>
  );
};

export default Chatbot;
