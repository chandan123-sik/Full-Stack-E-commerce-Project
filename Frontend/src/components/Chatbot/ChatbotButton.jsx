import React from "react";

const ChatbotButton = ({ toggleChat }) => {
  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
      💬
    </button>
  );
};

export default ChatbotButton;
