'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface QAPair {
    keywords: string[];
    response: string;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm Fourat's AI assistant. Ask me anything about his skills, projects, or experience!",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const qaDatabase: QAPair[] = [
        {
            keywords: ['skills', 'technologies', 'tech stack', 'what can you do', 'expertise'],
            response: "Fourat is a Full Stack Developer with expertise in React, Next.js, TypeScript, Node.js, and Python. He's also skilled in UI/UX design using Figma and Adobe XD, and has experience with databases like PostgreSQL and MongoDB."
        },
        {
            keywords: ['projects', 'portfolio', 'work', 'built', 'created'],
            response: "Fourat has worked on various projects including an HR Platform with Next.js, a comprehensive Design System, an Analytics Dashboard with real-time data visualization, and a SaaS Platform serving 1000+ users. Check out the projects.tsx file for more details!"
        },
        {
            keywords: ['experience', 'years', 'background', 'career'],
            response: "Fourat has 5+ years of development experience, has completed 20+ projects, and worked with 10+ happy clients. He specializes in creating seamless digital experiences that combine beautiful design with robust functionality."
        },
        {
            keywords: ['contact', 'email', 'reach', 'hire', 'available'],
            response: "You can reach Fourat at fouratidani2@gmail.com or connect on LinkedIn at linkedin.com/in/fourat-idani. He's currently open to new opportunities and available for remote work worldwide!"
        },
        {
            keywords: ['design', 'ui', 'ux', 'designer'],
            response: "Fourat is also a skilled Graphic Designer and UI/UX Designer! He uses tools like Figma, Adobe XD, Illustrator, and Photoshop. His design proficiency is rated at 70%, and he's created complete brand identity packages and mobile app designs."
        },
        {
            keywords: ['frontend', 'front-end', 'react', 'nextjs'],
            response: "Fourat's frontend skills include React, Next.js, JavaScript, TypeScript, and modern CSS frameworks like Tailwind CSS and Sass. His frontend proficiency is rated at 80%!"
        },
        {
            keywords: ['backend', 'back-end', 'server', 'api'],
            response: "On the backend, Fourat works with Node.js, Python, and Java. He's experienced with Express, Nest.js, Spring Boot, and databases like MysSQL, PostgreSQL, MongoDB. Backend proficiency: 88%."
        },
        {
            keywords: ['hello', 'hi', 'hey', 'greetings'],
            response: "Hello! 👋 I'm here to help you learn more about Fourat Idani. Feel free to ask about his skills, projects, experience, or how to contact him!"
        },
        {
            keywords: ['thanks', 'thank you', 'appreciate'],
            response: "You're welcome! Feel free to ask if you have any other questions about Fourat's work or background. 😊"
        },
        {
            keywords: ['help', 'what can you tell me', 'info', 'information'],
            response: "I can tell you about Fourat's skills, projects, work experience, design capabilities, and how to contact him. Just ask me anything you'd like to know!"
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        for (const qa of qaDatabase) {
            if (qa.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return qa.response;
            }
        }

        return "I'm not sure about that. Try asking me about Fourat's skills, projects, experience, or how to contact him!";
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages([...messages, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: findResponse(inputValue),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const suggestedQuestions = [
        "What are your skills?",
        "Tell me about your projects",
        "How can I contact you?",
        "What's your experience?"
    ];

    const handleSuggestionClick = (question: string) => {
        setInputValue(question);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title={isOpen ? 'Close Chat' : 'Open Chat'}
            >
                {isOpen ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                        <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
                    </svg>
                )}
            </button>

            {/* Chat Panel */}
            <div className={`chatbot-panel ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <div className="chatbot-header-content">
                        <div className="chatbot-avatar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                        <div className="chatbot-title">
                            <div className="chatbot-name">AI Assistant</div>
                            <div className="chatbot-status">
                                <span className="status-dot"></span>
                                Online
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chatbot-messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.sender}`}>
                            <div className="message-content">
                                {message.text}
                            </div>
                            <div className="message-time">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message bot typing">
                            <div className="message-content">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {messages.length === 1 && (
                    <div className="suggested-questions">
                        <div className="suggestions-label">Try asking:</div>
                        {suggestedQuestions.map((question, index) => (
                            <button
                                key={index}
                                className="suggestion-chip"
                                onClick={() => handleSuggestionClick(question)}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                )}

                <div className="chatbot-input-container">
                    <input
                        type="text"
                        className="chatbot-input"
                        placeholder="Ask me anything..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="chatbot-send"
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
