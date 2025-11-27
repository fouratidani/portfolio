'use client';

import { useState } from 'react';
import MenuBar from './MenuBar';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import CopilotChat from './CopilotChat';
import Terminal from './Terminal';

interface FileContent {
  name: string;
  content: string;
  language: string;
}

export default function VSCodeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeFile, setActiveFile] = useState('README.md');
  const [openTabs, setOpenTabs] = useState<string[]>(['README.md']);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSidebarPanel, setActiveSidebarPanel] = useState<'explorer' | 'search' | 'source-control' | 'debug' | 'extensions'>('explorer');

  const fileContents: { [key: string]: FileContent } = {
    'README.md': {
      name: 'README.md',
      language: 'markdown',
      content: `# FOURAT IDANI

## Computer Science Graduate | Full-Stack Developer

**On The Search For An End Of Studies Project Internship**

📧 fouratidani2@gmail.com | 📱 +216 98 365 504  
🔗 [github.com/fouratidani](https://github.com/fouratidani) | [linkedin.com/in/fourat-idani](https://linkedin.com/in/fourat-idani)

---

## Profile

Creative and detail-oriented full-stack developer skilled in React.js, Node.js, and React Native. Passionate about building responsive, user-centered web and mobile applications that combine functionality with design. Dedicated to learning modern technologies, collaborating with teams, and delivering impactful digital solutions.

---

## Education

**B.Sc. Computer Science** - ISITCom Sousse (2023-Ongoing)  
Multimedia & Software Development

**High School Diploma in Mathematics** - Hammem Sousse 2 HS (2021-2022)

---

*Navigate through the files in the explorer to learn more about my skills, experience, and projects.*`,
    },
    'about.md': {
      name: 'about.md',
      language: 'markdown',
      content: `# About Me

## Background

Hello! I'm **Fourat Idani**, a Computer Science graduate and Full-Stack Developer currently pursuing my B.Sc. in Computer Science at ISITCom Sousse, specializing in Multimedia & Software Development.

## Profile

Creative and detail-oriented full-stack developer skilled in React.js, Node.js, and React Native. I'm passionate about building responsive, user-centered web and mobile applications that combine functionality with design. Dedicated to learning modern technologies, collaborating with teams, and delivering impactful digital solutions.

## What Drives Me

I believe in creating digital experiences that not only work flawlessly but also provide exceptional user experiences. My approach combines technical expertise with creative problem-solving to deliver solutions that make a real impact.

## Philosophy

I approach every project with:

- **Attention to Detail**: Every line of code and user interaction matters
- **User-Centric Design**: Building applications that users love to use
- **Continuous Learning**: Staying current with modern technologies and best practices
- **Team Collaboration**: Working effectively with diverse teams to achieve common goals
- **Problem Solving**: Finding creative solutions to complex technical challenges

## Benevolent Experience

### IEEE Leadership Roles

- **Webmaster, IEEE AESS SBC** (2025-Ongoing): Maintained chapter website, improved UX/UI, and managed event publishing
- **Media Chief, IEEE ESSTHS SB** (2025-Ongoing): Led social media strategy, event branding, and visual content creation. Increased audience engagement across platforms
- **Technical Challenge Chief, IAS TAM 4.0** (2024-2025): Designed and supervised technical challenges and mentored participants
- **Treasurer, IEEE CS SBC** (2023): Handled budgets, managed sponsor relations, and ensured financial transparency

## Languages

- **Arabic**: Fluent
- **English**: Proficient
- **French**: Operational`,
    },
    'skills.json': {
      name: 'skills.json',
      language: 'json',
      content: JSON.stringify({
        "technical_skills": {
          "frontend": {
            "frameworks": ["React.js", "Next.js", "React Native"],
            "languages": ["JavaScript", "HTML5", "CSS3"],
            "styling": ["Tailwind CSS"]
          },
          "backend": {
            "languages": ["Node.js", "PHP", "Java"],
            "frameworks": ["Express.js", "NestJS"],
            "databases": ["SQL", "PostgreSQL"]
          },
          "mobile": {
            "framework": "React Native",
            "focus": "Cross-platform mobile development"
          },
          "tools": {
            "version_control": ["Git", "GitHub"],
            "api_testing": ["Postman"],
            "other": ["VS Code"]
          }
        },
        "soft_skills": [
          "Teamwork",
          "Problem Solving",
          "Adaptability",
          "Leadership",
          "Communication",
          "Project Management"
        ],
        "certificates": [
          "Cisco: Networking Academy Learn-A-Thon (2025)",
          "IBM: Node and Express Essentials (2024)",
          "Meta: Front-End Development Certificate (2024)"
        ]
      }, null, 2),
    },
    'projects.tsx': {
      name: 'projects.tsx',
      language: 'tsx',
      content: `interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: 'freelance' | 'internship';
  description: string[];
  technologies: string[];
}

const experience: Experience[] = [
  {
    id: 1,
    company: "WinToWin",
    role: "Web Developer (Freelance)",
    period: "Sep-Oct 2025",
    type: "freelance",
    description: [
      "Developed SEO-optimized web apps using Next.js and reusable components",
      "Collaborated with clients to meet branding and functionality needs"
    ],
    technologies: ["Next.js", "React", "SEO", "Component Design"]
  },
  {
    id: 2,
    company: "Groupe Étoile Formation",
    role: "Mobile Developer (Freelance)",
    period: "Jul 2025-Ongoing",
    type: "freelance",
    description: [
      "Created React Native app for managing training sessions and student progress",
      "Integrated REST APIs and optimized mobile UI/UX across platforms"
    ],
    technologies: ["React Native", "REST APIs", "Mobile UI/UX"]
  },
  {
    id: 3,
    company: "Orange Digital Center",
    role: "Full-Stack Developer Intern",
    period: "Jul-Sep 2025",
    type: "internship",
    description: [
      "Contributed to full-stack development using React.js, NestJS, and PostgreSQL",
      "Designed responsive UIs with Tailwind CSS and optimized front-end performance",
      "Collaborated with developers to deploy scalable, high-performance apps"
    ],
    technologies: ["React.js", "NestJS", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 4,
    company: "Digit-R",
    role: "Front-End Developer Intern",
    period: "Aug-Sep 2024",
    type: "internship",
    description: [
      "Built and styled React components and improved accessibility",
      "Worked on UI enhancements and code reviews for web performance"
    ],
    technologies: ["React", "Component Development", "Accessibility", "Performance Optimization"]
  }
];

export default function ExperienceShowcase() {
  return (
    <div className="experience-container">
      <h1>Professional Experience</h1>
      {experience.map(exp => (
        <ExperienceCard key={exp.id} {...exp} />
      ))}
    </div>
  );
}`,
    },
    'contact.ts': {
      name: 'contact.ts',
      language: 'ts',
      content: `interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
}

interface SocialLinks {
  linkedin: string;
  github: string;
}

const contactInfo: ContactInfo = {
  name: "Fourat IDANI",
  role: "Computer Science Graduate | Full-Stack Developer",
  email: "fouratidani2@gmail.com",
  phone: "+216 98 365 504",
  location: "Tunisia",
  availability: "Searching for an End Of Studies Project Internship"
};

const socialLinks: SocialLinks = {
  linkedin: "https://linkedin.com/in/fourat-idani",
  github: "https://github.com/fouratidani"
};

// Contact preferences
const preferredContactMethods = [
  "Email: fouratidani2@gmail.com",
  "Phone: +216 98 365 504",
  "LinkedIn: linkedin.com/in/fourat-idani",
  "GitHub: github.com/fouratidani"
];

// Areas of interest
const interests = [
  "Full-stack web development",
  "Mobile app development with React Native",
  "End of studies project internship opportunities",
  "Freelance projects",
  "Open-source contributions"
];

export { contactInfo, socialLinks, preferredContactMethods, interests };`,
    },
  };

  const handleFileSelect = (file: any) => {
    setActiveFile(file.name);
    if (!openTabs.includes(file.name)) {
      setOpenTabs([...openTabs, file.name]);
    }
  };

  const handleTabClose = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    if (activeFile === fileName && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1]);
    }
  };

  const handleTabClick = (fileName: string) => {
    setActiveFile(fileName);
  };

  const handleMenuAction = (action: string) => {
    switch (action) {
      case 'Explorer':
        handleActivityBarClick('explorer');
        break;
      case 'Search':
        handleActivityBarClick('search');
        break;
      case 'Close':
        if (openTabs.length > 0) {
          const newTabs = openTabs.filter(tab => tab !== activeFile);
          setOpenTabs(newTabs);
          if (newTabs.length > 0) {
            setActiveFile(newTabs[newTabs.length - 1]);
          }
        }
        break;
      case 'Save':
        alert(`Saved ${activeFile}`);
        break;
      case 'Find':
        handleActivityBarClick('search');
        break;
      case 'New Terminal':
      case 'Terminal':
        setTerminalOpen(!terminalOpen);
        break;
      default:
        console.log('Menu action:', action);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleActivityBarClick = (panel: 'explorer' | 'search' | 'source-control' | 'debug' | 'extensions') => {
    if (activeSidebarPanel === panel && sidebarOpen) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setActiveSidebarPanel(panel);
      setSidebarOpen(true);
    }
  };

  const renderSidebarContent = () => {
    switch (activeSidebarPanel) {
      case 'explorer':
        return <FileExplorer onFileSelect={handleFileSelect} activeFile={activeFile} filterQuery={searchQuery} />;
      case 'search':
        return (
          <div style={{ padding: '16px' }}>
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search in files..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-primary)',
                color: 'var(--text-primary)',
                borderRadius: '4px'
              }}
            />
            <p style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              {searchQuery ? `Filtering files by: "${searchQuery}"` : 'Enter search term to filter files'}
            </p>
          </div>
        );
      case 'source-control':
        return (
          <div style={{ padding: '16px' }}>
            <h3>Source Control</h3>
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              Git repository information would appear here.
            </p>
            <div style={{ marginTop: '16px' }}>
              <p>📁 Portfolio Project</p>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                Branch: main
              </p>
            </div>
          </div>
        );
      case 'debug':
        return (
          <div style={{ padding: '16px' }}>
            <h3>Run and Debug</h3>
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              Debug configurations would appear here.
            </p>
          </div>
        );
      case 'extensions':
        return (
          <div style={{ padding: '16px' }}>
            <h3>Extensions</h3>
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              Recommended extensions:
            </p>
            <ul style={{ marginTop: '12px', fontSize: '12px', paddingLeft: '20px' }}>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>GitLens</li>
              <li>Tailwind CSS IntelliSense</li>
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="vscode-wrapper">
      <MenuBar onMenuAction={handleMenuAction} onSearch={handleSearch} />

      <div className="vscode-container">
        {/* Activity Bar */}
        <div className="activity-bar">
          <div
            className={`activity-icon ${activeSidebarPanel === 'explorer' && sidebarOpen ? 'active' : ''}`}
            title="Explorer"
            onClick={() => handleActivityBarClick('explorer')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </div>
          <div
            className={`activity-icon ${activeSidebarPanel === 'search' && sidebarOpen ? 'active' : ''}`}
            title="Search"
            onClick={() => handleActivityBarClick('search')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
          <div
            className={`activity-icon ${activeSidebarPanel === 'source-control' && sidebarOpen ? 'active' : ''}`}
            title="Source Control"
            onClick={() => handleActivityBarClick('source-control')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z" />
            </svg>
          </div>
          <div
            className={`activity-icon ${activeSidebarPanel === 'debug' && sidebarOpen ? 'active' : ''}`}
            title="Run and Debug"
            onClick={() => handleActivityBarClick('debug')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div
            className={`activity-icon ${activeSidebarPanel === 'extensions' && sidebarOpen ? 'active' : ''}`}
            title="Extensions"
            onClick={() => handleActivityBarClick('extensions')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.25-3.7-3-4.38V4h6V2c0-.28.22-.5.5-.5s.5.22.5.5v2h2V2c0-.28.22-.5.5-.5zM4 9c1.66 0 3 1.34 3 3s-1.34 3-3 3V9zm11 6c0-1.66 1.34-3 3-3v6c-1.66 0-3-1.34-3-3z" />
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="sidebar">
            <div className="sidebar-header">
              {activeSidebarPanel.toUpperCase().replace('-', ' ')}
            </div>
            <div className="sidebar-content">
              {renderSidebarContent()}
            </div>
          </div>
        )}

        {/* Main Editor */}
        <div className="main-content-area">
          <div className="editor-container">
            {/* Tabs */}
            <div className="tabs-container">
              {openTabs.map((tab) => (
                <div
                  key={tab}
                  className={`tab ${activeFile === tab ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span>{tab}</span>
                  <span className="tab-close" onClick={(e) => handleTabClose(tab, e)}>
                    ×
                  </span>
                </div>
              ))}
            </div>

            {/* Editor Content */}
            {fileContents[activeFile] && (
              <CodeEditor
                fileName={activeFile}
                content={fileContents[activeFile].content}
                language={fileContents[activeFile].language}
              />
            )}
          </div>

          {/* Terminal at bottom */}
          <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        </div>

        {/* Copilot Chat - Right Side Vertical */}
        <CopilotChat isOpen={true} />
      </div>
    </div>
  );
}
