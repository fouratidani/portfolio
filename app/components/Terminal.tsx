'use client';

import { useState, useRef, useEffect } from 'react';

interface TerminalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([
        'Welcome to the Portfolio Terminal!',
        'Type "help" for available commands.',
        ''
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    const commands: { [key: string]: () => string } = {
        help: () => `Available commands:
  help       - Show this help message
  about      - About Fourat Idani
  skills     - List technical skills
  projects   - Show recent projects
  contact    - Contact information
  clear      - Clear terminal
  github     - Open GitHub profile
  linkedin   - Open LinkedIn profile`,

        about: () => `Fourat Idani - Full Stack Developer | Graphic Designer | UI/UX Designer

5+ years of experience building modern web applications and creating stunning designs.
Passionate about combining beautiful design with robust functionality.`,

        skills: () => `Technical Skills:
  Frontend:  React, Next.js, TypeScript, Tailwind CSS
  Backend:   Node.js, Python, Express, Django
  Design:    Figma, Adobe XD, Illustrator, Photoshop
  Database:  PostgreSQL, MongoDB, Redis
  DevOps:    Docker, AWS, Vercel`,

        projects: () => `Recent Projects:
  • E-Commerce Platform - Next.js, Node.js, MongoDB
  • Design System - React, TypeScript, Storybook
  • Analytics Dashboard - React, D3.js, Python
  • SaaS Platform - Next.js, Prisma, PostgreSQL`,

        contact: () => `Contact Information:
  Email:     contact@fouratidani.com
  LinkedIn:  linkedin.com/in/fourat-idani
  GitHub:    github.com
  
Available for remote work worldwide!`,

        clear: () => {
            setHistory(['']);
            return '';
        },

        github: () => {
            window.open('https://github.com', '_blank');
            return 'Opening GitHub profile...';
        },

        linkedin: () => {
            window.open('https://linkedin.com/in/fourat-idani', '_blank');
            return 'Opening LinkedIn profile...';
        }
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (!trimmedCmd) return;

        const output = commands[trimmedCmd]
            ? commands[trimmedCmd]()
            : `Command not found: ${trimmedCmd}. Type "help" for available commands.`;

        if (trimmedCmd !== 'clear') {
            setHistory([...history, `$ ${cmd}`, output, '']);
        }

        setCommandHistory([...commandHistory, cmd]);
        setHistoryIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1
                    ? commandHistory.length - 1
                    : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1);
                    setInput('');
                } else {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="terminal-panel">
            <div className="terminal-header">
                <div className="terminal-title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2h15a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-11zM1 3v10h14V3H1z" />
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <span>TERMINAL</span>
                </div>
                <button className="terminal-close" onClick={onClose} title="Close Terminal">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
            <div className="terminal-content" ref={historyRef}>
                {history.map((line, index) => (
                    <div key={index} className="terminal-line">
                        {line}
                    </div>
                ))}
                <div className="terminal-input-line">
                    <span className="terminal-prompt">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="terminal-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        spellCheck={false}
                    />
                </div>
            </div>
        </div>
    );
}
