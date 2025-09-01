import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 p-2 text-gray-500 text-sm">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></div>
      <span>Bot is typing...</span>
    </div>
  );
};

export default TypingIndicator;
