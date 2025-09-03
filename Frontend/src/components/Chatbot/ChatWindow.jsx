import React, { useEffect, useRef } from "react";

const ChatWindow = ({ messages, toggleChat }) => {
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Scroll lock on hover
  useEffect(() => {
    const chatBox = chatRef.current;

    const handleMouseEnter = () => {
      document.body.style.overflow = "hidden"; // disable page scroll
    };

    const handleMouseLeave = () => {
      document.body.style.overflow = "auto"; // enable page scroll again
    };

    if (chatBox) {
      chatBox.addEventListener("mouseenter", handleMouseEnter);
      chatBox.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (chatBox) {
        chatBox.removeEventListener("mouseenter", handleMouseEnter);
        chatBox.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={chatRef}
      style={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        width: "320px",
        height: "450px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 9999,
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px" }}>AI Chatbot</h3>
        <button
          onClick={toggleChat}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "8px",
              textAlign: msg.sender === "user" ? "right" : "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "12px",
                backgroundColor: msg.sender === "user" ? "#2563eb" : "#f1f1f1",
                color: msg.sender === "user" ? "white" : "black",
                maxWidth: "75%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderTop: "1px solid #ddd",
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "8px",
          }}
        />
        <button
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
