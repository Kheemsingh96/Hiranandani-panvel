"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaTimes, FaRedo } from "react-icons/fa";

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZHaNg4XvWczLuVFWZ7rOKz9RuEYzjxG6s5IkQ--NNvt9klgpgjm3C81L16teeV52KJQ/exec';
const BOT_IMG = "/assets/chatbot.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [flowStep, setFlowStep] = useState(0); 
  const messagesEndRef = useRef(null);

  useEffect(() => {
    let sessionId = localStorage.getItem('chat_session_id');
    if (!sessionId) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      localStorage.setItem('chat_session_id', sessionId);
    }
    if (messages.length === 0) {
      setMessages([{ sender: 'ai', text: 'Hi! Do you need help with Hiranandani Fortune City?' }]);
    }
  }, [messages.length]); 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleRefresh = () => {
    const newSessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    localStorage.setItem('chat_session_id', newSessionId);
    setFlowStep(0);
    setMessages([{ sender: 'ai', text: 'How can I help you today?' }]);
  };

  const validateMobile = (m) => /^[6-9]\d{9}$/.test(m);
  const validateEmail = (e) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const sid = localStorage.getItem('chat_session_id');
    setMessages(prev => [...prev, { sender: 'user', text: text }]);
    processFlow(text, sid);
    setInput('');
  };

  const processFlow = (userText, sid) => {
    setLoading(true);
    let data = {};
    if (flowStep === 4 && validateMobile(userText)) data = { mobile: userText };
    else if (flowStep === 5 && validateEmail(userText)) data = { email: userText };

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ type: 'chat', sessionId: sid, message: userText, ...data })
    });

    setTimeout(() => {
        let reply = "";
        let opts = [];
        let next = flowStep;
        let err = false;

        if (flowStep === 0) {
            reply = "Welcome! What are you looking for at Fortune City?";
            opts = ["Pricing & Plans", "Get Directions", "Book Site Visit", "Call Back"];
            next = 1;
        } else if (flowStep === 1) {
            reply = "Have you visited our project before?";
            opts = ["Yes", "No"];
            next = 2;
        } else if (flowStep === 2) {
            reply = "Which configuration do you prefer?";
            opts = ["1 BHK", "2 BHK", "3 BHK", "Plots"];
            next = 3;
        } else if (flowStep === 3) {
            reply = "Please share your Mobile Number for the latest inventory.";
            next = 4;
        } else if (flowStep === 4) {
            if (validateMobile(userText)) {
                reply = "Great! And your Email ID for the brochure?";
                next = 5;
            } else {
                reply = "Invalid number. Please enter a 10-digit mobile number.";
                err = true;
            }
        } else if (flowStep === 5) {
            if (validateEmail(userText)) {
                reply = "Thanks! Our team will contact you soon.";
                next = 6;
            } else {
                reply = "Please enter a valid email address.";
                err = true;
            }
        } else {
             reply = "Is there anything else I can assist with?";
             opts = ["Pricing", "Location Gallery"];
        }

        setMessages(prev => [...prev, { sender: 'ai', text: reply, options: opts }]);
        if (!err) setFlowStep(next);
        setLoading(false);
    }, 1000);
  };

  return (
    <>
      <style>{`
        .p-bot-con { position: fixed; bottom: 85px; right: 30px; z-index: 99999; font-family: 'Inter', sans-serif; display: flex; flex-direction: column; align-items: flex-end; }
        .p-bot-btn-wrapper { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .p-bot-tooltip { background: #ffffff; color: #4b5563; padding: 10px 18px; border-radius: 25px; font-size: 14px; font-weight: 600; box-shadow: 0 4px 15px rgba(0,0,0,0.1); animation: p-pop 0.4s ease-out; border: 1px solid #e5e7eb; }
        .p-bot-btn { width: 70px; height: 70px; background: transparent; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); padding: 0; }
        .p-bot-btn:hover { transform: scale(1.1); }
        .p-bot-btn img { width: 100%; height: 100%; object-fit: contain; }
        .p-bot-win { width: 380px; height: 600px; max-height: 85vh; background: #ffffff; border-radius: 24px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.05); animation: p-pop 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); margin-bottom: 20px; }
        .p-bot-head { background: #388434; padding: 20px; color: #fff; display: flex; justify-content: space-between; align-items: center; }
        .p-bot-body { flex: 1; padding: 20px; background: #f8fafc; overflow-y: auto; display: flex; flex-direction: column; gap: 15px; scrollbar-width: thin; }
        .p-msg-grp { display: flex; flex-direction: column; max-width: 85%; }
        .p-msg-grp.ai { align-self: flex-start; }
        .p-msg-grp.user { align-self: flex-end; }
        .p-msg { display: flex; align-items: flex-end; gap: 10px; }
        .p-bubble { padding: 12px 16px; font-size: 14px; line-height: 1.5; border-radius: 18px; position: relative; word-wrap: break-word; }
        .ai .p-bubble { background: #ffffff; color: #334155; border: 1px solid #e2e8f0; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
        .user .p-bubble { background: #388434; color: #ffffff; border-bottom-right-radius: 4px; }
        .p-avatar { width: 30px; height: 30px; border-radius: 50%; background: transparent; padding: 0; border: none; object-fit: contain; }
        .p-opts { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; margin-left: 40px; }
        .p-opt-b { background: #fff; border: 1px solid #388434; color: #388434; border-radius: 12px; padding: 10px 15px; font-size: 13px; font-weight: 500; cursor: pointer; transition: 0.2s; text-align: left; width: fit-content; }
        .p-opt-b:hover { background: #388434; color: #fff; transform: translateX(5px); }
        .p-bot-foot { padding: 15px 20px; display: flex; gap: 10px; background: #fff; border-top: 1px solid #f1f5f9; align-items: center; }
        .p-bot-foot input { flex: 1; padding: 12px 18px; border: 1px solid #e2e8f0; border-radius: 15px; outline: none; font-size: 14px; background: #f8fafc; transition: 0.2s; }
        .p-bot-foot input:focus { border-color: #388434; background: #fff; box-shadow: 0 0 0 4px rgba(56, 132, 52, 0.1); }
        .p-send { background: #388434; color: #fff; border: none; width: 45px; height: 45px; border-radius: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .p-send:hover { background: #2a6327; transform: scale(1.05); }
        @keyframes p-pop { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @media (max-width: 500px) { .p-bot-win { width: calc(100vw - 40px); height: 75vh; right: 20px; } .p-bot-con { bottom: 80px; right: 20px; } }
      `}</style>

      <div className="p-bot-con">
        {!isOpen ? (
          <div className="p-bot-btn-wrapper" onClick={toggleChat}>
            <div className="p-bot-tooltip">Do you need help?</div>
            <button className="p-bot-btn">
              <img src={BOT_IMG} alt="bot" />
            </button>
          </div>
        ) : (
          <div className="p-bot-win">
            <div className="p-bot-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={BOT_IMG} style={{ width: '35px', background: 'transparent', padding: '0' }} alt="bot" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>Assistant</div>
                  <div style={{ fontSize: '11px', opacity: 0.8 }}>Online</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <FaRedo size={14} style={{ cursor: 'pointer', opacity: 0.8 }} onClick={handleRefresh} />
                <FaTimes size={20} style={{ cursor: 'pointer' }} onClick={toggleChat} />
              </div>
            </div>
            <div className="p-bot-body">
              {messages.map((m, i) => (
                <div key={i} className={`p-msg-grp ${m.sender === 'ai' ? 'ai' : 'user'}`}>
                  <div className="p-msg">
                    {m.sender === 'ai' && <img src={BOT_IMG} className="p-avatar" alt="ai" />}
                    <div className="p-bubble">{m.text}</div>
                  </div>
                  {m.sender === 'ai' && m.options && (
                    <div className="p-opts">
                      {m.options.map((o, idx) => (
                        <button key={idx} className="p-opt-b" onClick={() => handleSend(o)}>{o}</button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {loading && <div className="p-msg-grp ai"><div className="p-bubble">Typing...</div></div>}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-bot-foot">
              <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && handleSend(input)}
                placeholder="Message..." 
              />
              <button className="p-send" onClick={() => handleSend(input)}>
                <FaPaperPlane size={18}/>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;