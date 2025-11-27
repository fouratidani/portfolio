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

interface CopilotChatProps {
    isOpen: boolean;
}

export default function CopilotChat({ isOpen }: CopilotChatProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm your AI assistant. Ask me anything about Fourat's skills, projects, or experience!",
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
            response: "Fourat has worked on various projects including an E-Commerce Platform with Next.js, a comprehensive Design System, an Analytics Dashboard with real-time data visualization, and a SaaS Platform serving 1000+ users. Check out the projects.tsx file for more details!"
        },
        {
            keywords: ['experience', 'years', 'background', 'career'],
            response: "Fourat has 5+ years of development experience, has completed 50+ projects, and worked with 30+ happy clients. He specializes in creating seamless digital experiences that combine beautiful design with robust functionality."
        },
        {
            keywords: ['contact', 'email', 'reach', 'hire', 'available'],
            response: "You can reach Fourat at contact@fouratidani.com or connect on LinkedIn at linkedin.com/in/fourat-idani. He's currently open to new opportunities and available for remote work worldwide!"
        },
        {
            keywords: ['design', 'ui', 'ux', 'designer'],
            response: "Fourat is also a skilled Graphic Designer and UI/UX Designer! He uses tools like Figma, Adobe XD, Illustrator, and Photoshop. His design proficiency is rated at 92%, and he's created complete brand identity packages and mobile app designs."
        },
        {
            keywords: ['frontend', 'front-end', 'react', 'nextjs'],
            response: "Fourat's frontend skills include React, Next.js, Vue.js, TypeScript, and modern CSS frameworks like Tailwind CSS and Sass. His frontend proficiency is rated at 95%!"
        },
        {
            keywords: ['backend', 'back-end', 'server', 'api'],
            response: "On the backend, Fourat works with Node.js, Python, and Java. He's experienced with Express, Django, Spring Boot, and databases like PostgreSQL, MongoDB, and Redis. Backend proficiency: 88%."
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

    if (!isOpen) return null;

    return (
        <div className="copilot-panel">
            <div className="copilot-header">
                <div className="copilot-icon">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
                <div className="copilot-title">
                    <div className="copilot-name">GitHub Copilot</div>
                    <div className="copilot-subtitle">Chat</div>
                </div>
            </div>

            <div className="copilot-messages">
                {messages.map((message) => (
                    <div key={message.id} className={`copilot-message ${message.sender}`}>
                        <div className="message-avatar">
                            {message.sender === 'bot' ? (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                            )}
                        </div>
                        <div className="message-content-wrapper">
                            <div className="message-sender-name">
                                {message.sender === 'bot' ? 'Copilot' : 'You'}
                            </div>
                            <div className="message-text">
                                {message.text}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="copilot-message bot">
                        <div className="message-avatar">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                        <div className="message-content-wrapper">
                            <div className="message-sender-name">Copilot</div>
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
                <div className="copilot-suggestions">
                    {suggestedQuestions.map((question, index) => (
                        <button
                            key={index}
                            className="copilot-suggestion"
                            onClick={() => handleSuggestionClick(question)}
                        >
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            {question}
                        </button>
                    ))}
                </div>
            )}

            <div className="copilot-input-container">
                <input
                    type="text"
                    className="copilot-input"
                    placeholder="Ask Copilot..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="copilot-send"
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M15.854 7.146l-7-7a.5.5 0 0 0-.708.708L14.293 7H.5a.5.5 0 0 0 0 1h13.793l-6.147 6.146a.5.5 0 0 0 .708.708l7-7a.5.5 0 0 0 0-.708z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
