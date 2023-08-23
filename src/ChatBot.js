import React, { useState } from 'react';
import './Chatbot.css'; // Asegúrate de tener tu archivo de estilos Chatbot.css
import bot from "./assets/icono-bot.png";

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
      // Aquí podrías realizar la llamada a la API de chatbot y manejar la respuesta
    }
  };

  return (
    <div className={`chatbot ${showChat ? 'active' : ''}`}>
      <div className="chatbot-toggle" onClick={toggleChat}>
        <img  src={bot} alt="Chatbot" />
      </div>
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span>Chatbot Asesor</span>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
