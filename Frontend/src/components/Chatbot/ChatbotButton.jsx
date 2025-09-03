import React from "react";

const ChatbotButton = ({ toggleChat }) => {
  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg
                 transition-transform duration-300 ease-in-out 
                 hover:scale-110 hover:bg-blue-700 hover:shadow-blue-400 hover:shadow-lg"
    >
      💬
    </button>
  );
};

export default ChatbotButton;
