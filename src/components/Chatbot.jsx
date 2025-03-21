import React, { useState } from "react";
import axios from "axios";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello, How are you! I'm here to answer any questions you have about Neema.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message: input });
  
      setMessages([...newMessages, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessages([...newMessages, { text: "Oops! Something went wrong.", sender: "bot" }]);
    }
  };
  

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        <FaCommentDots />
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h3>Chat with Me</h3>
            <button onClick={toggleChatbot}><FaTimes /></button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;