import React, { useEffect, useRef } from "react";

const MessageList = ({ messages }) => {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages || messages.length === 0) {
    return <div className="text-gray-500 p-2">No messages yet...</div>;
  }

  return (
    <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-2 rounded-lg max-w-xs ${
            msg.sender === "user"
              ? "bg-blue-500 text-white self-end ml-auto"
              : "bg-gray-200 text-black self-start"
          }`}
        >
          {msg.text}
        </div>
      ))}
      {/* Always scroll here */}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
