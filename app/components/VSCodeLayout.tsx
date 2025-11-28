'use client';

import { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fileContents: { [key: string]: FileContent } = {
    'README.md': {
      name: 'README.md',
      language: 'markdown',
      content: `# FOURAT IDANI

## Computer Science Graduate | Full-Stack Developer

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

## Professional Experience

### EasyBank | Information Technology Developer (Internship)
*Nov 2025 - Present*
- Contribute to the design, development, and improvement of digital financial solutions within a modern, fast-paced fintech environment
- Focus on building reliable and scalable features that enhance the user experience
- Support the company’s mission of delivering secure and accessible digital banking services

### OORB Open Organic Robotics | Graphic Designer (Internship)
*Jul 2025 - Sep 2025*
- Contributed to both graphic design and community management by creating engaging visual content
- Developed branding assets and managed online communications
- Worked on building awareness of the startup’s vision in robotics and innovation
- Fostered an active community through content creation and social media management

### Orange Digital Center Tunisie | Full-stack Developer (Internship)
*Jul 2025 - Aug 2025*
- Worked with an amazing team to build innovative digital solutions
- Gained hands-on experience in full-stack development using React.js, NestJS, Node.js, and PostgreSQL
- Used Tailwind CSS to design responsive, user-friendly interfaces
- Sharpened technical skills and improved problem-solving abilities
- Contributed to the development of scalable, high-performance web applications

### Digit-R | Frontend Developer (Internship)
*Aug 2024 - Sep 2024*
- Collaborated with other interns on a project using React as the main framework and Node.js
- Developed frontend components and features

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
            "languages": ["TypeScript", "JavaScript", "HTML5", "CSS3"],
            "styling": ["Tailwind CSS", "Sass"]
          },
          "backend": {
            "languages": ["Node.js", "PHP", "Java", "Python", "C/C++"],
            "frameworks": ["Express.js", "NestJS", "Spring Boot"],
            "databases": ["PostgreSQL", "MySQL", "MongoDB"]
          },
          "mobile": {
            "framework": "React Native",
            "focus": "Cross-platform mobile development"
          },
          "tools": {
            "version_control": ["Git", "GitHub", "GitLab"],
            "design": ["Figma", "Adobe XD"],
            "other": ["VS Code", "Postman", "Docker"]
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
    'experience.tsx': {
      name: 'experience.tsx',
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
    company: "EasyBank",
    role: "Information Technology Developer",
    period: "Nov 2025 - Present",
    type: "internship",
    description: [
      "Contribute to the design, development, and improvement of digital financial solutions within a modern, fast-paced fintech environment",
      "Focus on building reliable and scalable features that enhance the user experience",
      "Support the company’s mission of delivering secure and accessible digital banking services"
    ],
    technologies: ["TypeScript", "Next.js"]
  },
  {
    id: 2,
    company: "OORB Open Organic Robotics",
    role: "Graphic Designer",
    period: "Jul 2025 - Sep 2025",
    type: "internship",
    description: [
      "Contributed to both graphic design and community management by creating engaging visual content",
      "Developed branding assets and managed online communications",
      "Worked on building awareness of the startup’s vision in robotics and innovation",
      "Fostered an active community through content creation and social media management"
    ],
    technologies: ["Community Management", "Graphic Design"]
  },
  {
    id: 3,
    company: "Orange Digital Center Tunisie",
    role: "Full-stack Developer",
    period: "Jul 2025 - Aug 2025",
    type: "internship",
    description: [
      "Worked with an amazing team to build innovative digital solutions",
      "Gained hands-on experience in full-stack development using React.js, NestJS, Node.js, and PostgreSQL",
      "Used Tailwind CSS to design responsive, user-friendly interfaces",
      "Sharpened technical skills and improved problem-solving abilities",
      "Contributed to the development of scalable, high-performance web applications"
    ],
    technologies: ["React.js", "NestJS", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 4,
    company: "Digit-R",
    role: "Frontend Developer",
    period: "Aug 2024 - Sep 2024",
    type: "internship",
    description: [
      "Collaborated with other interns on a project using React as the main framework and Node.js",
      "Developed frontend components and features"
    ],
    technologies: ["React.js", "Node.js"]
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
    'projects.tsx': {
      name: 'projects.tsx',
      language: 'tsx',
      content: `export default function Projects() {
    const projects = [
        {
            title: 'University Student Management Cross Platform App (ISEPSI)',
            description: 'A cross-platform mobile application for managing university student data, schedules, and grades for ISEPSI.',
            tags: ['Flutter', 'Firebase', 'Dart', 'Android/iOS'],
            gradient: 'from-blue-600 to-cyan-500',
        },
        {
            title: 'HR Platform (SNSCL)',
            description: 'A comprehensive Human Resources platform for SNSCL to streamline employee management, payroll, and recruitment processes.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            title: 'Drone Controller (IEEE AESS ESSTHS SBC)',
            description: 'Custom drone controller software developed for the IEEE AESS ESSTHS Student Branch Chapter, featuring real-time telemetry and flight modes.',
            tags: ['C++', 'Python', 'Embedded Systems', 'IoT'],
            gradient: 'from-red-500 to-orange-500',
        },
        {
            title: 'AI Quiz Generator from PDF (ISITCOM)',
            description: 'An AI-powered tool that automatically generates quizzes and assessments from PDF course materials for ISITCOM students.',
            tags: ['Python', 'OpenAI API', 'LangChain', 'Streamlit'],
            gradient: 'from-violet-600 to-purple-500',
        },
        {
            title: 'IEEE Tunisia Section Event Tool Box',
            description: 'A suite of digital tools to assist in the organization and management of IEEE Tunisia Section events and conferences.',
            tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
            gradient: 'from-yellow-500 to-amber-500',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Header */}
                            <div className={\`h-48 bg-gradient-to-br \${project.gradient} relative overflow-hidden\`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
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

  const renderBottomNav = () => {
    if (!isMobile) return null;

    const navItems = [
      { name: 'Home', file: 'README.md', icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> },
      { name: 'About', file: 'about.md', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /> },
      { name: 'Skills', file: 'skills.json', icon: <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /> },
      { name: 'Experience', file: 'experience.tsx', icon: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /> },
      { name: 'Projects', file: 'projects.tsx', icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /> },
      { name: 'Contact', file: 'contact.ts', icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /> },
    ];

    return (
      <div className="mobile-bottom-nav">
        {navItems.map((item) => (
          <div
            key={item.file}
            className={`mobile-nav-item ${activeFile === item.file ? 'active' : ''}`}
            onClick={() => setActiveFile(item.file)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              {item.icon}
            </svg>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="vscode-wrapper">
      {!isMobile && <MenuBar onMenuAction={handleMenuAction} onSearch={handleSearch} />}

      <div className="vscode-container">
        {/* Activity Bar - Hidden on Mobile via CSS, but also conditionally rendered */}
        {!isMobile && (
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
        )}

        {/* Sidebar - Hidden on Mobile */}
        {!isMobile && sidebarOpen && (
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
            {/* Tabs - Hidden on Mobile */}
            {!isMobile && (
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
            )}

            {/* Editor Content */}
            {fileContents[activeFile] && (
              <CodeEditor
                fileName={activeFile}
                content={fileContents[activeFile].content}
                language={fileContents[activeFile].language}
              />
            )}
          </div>

          {/* Terminal at bottom - Hidden on Mobile */}
          {!isMobile && <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />}
        </div>

        {/* Copilot Chat - Hidden on Mobile */}
        {!isMobile && <CopilotChat isOpen={true} />}
      </div>

      {/* Mobile Bottom Navigation */}
      {renderBottomNav()}
    </div>
  );
}
