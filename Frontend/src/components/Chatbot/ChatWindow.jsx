import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

const ChatWindow = ({ messages, sendMessage, loading, toggleChat }) => {
  return (
    <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between items-center">
        <span>AI Chatbot</span>
        <button onClick={toggleChat} className="text-white">✖</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        <MessageList messages={messages} />
        {loading && <TypingIndicator />}
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
