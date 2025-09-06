import React, { useEffect, useRef } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

const ChatWindow = ({ messages, sendMessage, loading, toggleChat }) => {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Auto-scroll if near bottom
    const isAtBottom =
      container.scrollHeight - container.scrollTop <= container.clientHeight + 50;

    if (isAtBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;

      if (
        (isScrollingUp && scrollTop === 0) ||
        (isScrollingDown && scrollTop + clientHeight >= scrollHeight)
      ) {
        e.preventDefault(); // Prevent page scroll at top or bottom
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col overflow-hidden">
      <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between items-center">
        <span>AI Chatbot</span>
        <button onClick={toggleChat} className="text-white">✖</button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-2 space-y-2"
        style={{ maxHeight: "400px" }}
      >
        <MessageList messages={messages} />
        {loading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
