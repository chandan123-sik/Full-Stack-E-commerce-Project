import React, { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text) => {
    const newMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);

    // Bot typing start
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      // Bot reply
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "Sorry, something went wrong!" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to chatbot." },
        console.log(error)
      ]);
    } finally {
      // Stop typing indicator
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 font-semibold">
        AI Chatbot
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        <MessageList messages={messages} />
        {isTyping && <TypingIndicator />}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
