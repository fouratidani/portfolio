'use client';

import { useState } from 'react';
import MenuBar from './MenuBar';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import CopilotChat from './CopilotChat';

interface FileContent {
    name: string;
    content: string;
    language: string;
}

export default function VSCodeLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [copilotOpen, setCopilotOpen] = useState(false);
    const [activeFile, setActiveFile] = useState('README.md');
    const [openTabs, setOpenTabs] = useState<string[]>(['README.md']);

    const fileContents: { [key: string]: FileContent } = {
        'README.md': {
            name: 'README.md',
            language: 'markdown',
            content: `# FOURAT IDANI

![profile]

## Full Stack Developer | Graphic Designer | UI/UX Designer

Welcome to my portfolio! I'm a passionate developer and designer who loves creating beautiful, functional digital experiences.

### 🚀 What I Do

I specialize in building modern web applications and creating stunning designs that merge aesthetics with functionality. My unique blend of technical expertise and creative vision allows me to deliver comprehensive solutions from concept to deployment.

### 💼 Professional Focus

- **Full Stack Development**: Building scalable web applications with modern technologies
- **UI/UX Design**: Creating intuitive, user-centered interfaces
- **Graphic Design**: Developing visual identities and brand materials

### 📫 Get In Touch

Feel free to explore my work and reach out if you'd like to collaborate!

- LinkedIn: [linkedin.com/in/fourat-idani](https://linkedin.com/in/fourat-idani)
- Email: contact@fouratidani.com
- GitHub: [github.com/fouratidani](https://github.com)

---

*Navigate through the files in the explorer to learn more about my skills, projects, and experience.*`,
        },
        'about.md': {
            name: 'about.md',
            language: 'markdown',
            content: `# About Me

## Background

Hello! I'm **Fourat Idani**, a passionate Full Stack Developer, Graphic Designer, and UI/UX Designer with a unique blend of technical expertise and creative vision.

## My Journey

I specialize in creating seamless digital experiences that not only look stunning but also function flawlessly. My journey in tech has equipped me with a comprehensive skill set that spans from front-end development to back-end architecture, complemented by a keen eye for design aesthetics.

## What Drives Me

With expertise in modern web technologies and design tools, I bring ideas to life by combining clean code with beautiful interfaces. I believe that great design and robust functionality should go hand in hand to create memorable user experiences.

## Philosophy

I approach every project with:

- **Attention to Detail**: Every pixel and line of code matters
- **User-Centric Thinking**: Always putting the end user first
- **Continuous Learning**: Staying updated with the latest technologies and design trends
- **Collaboration**: Working closely with teams to achieve the best results

## Experience Highlights

### 5+ Years in Development
Building web applications, APIs, and full-stack solutions

### 50+ Projects Completed
From small websites to large-scale applications

### 30+ Happy Clients
Delivering quality work that exceeds expectations

## Beyond Code

When I'm not coding or designing, I enjoy:
- Exploring new design trends and technologies
- Contributing to open-source projects
- Mentoring aspiring developers
- Creating digital art and illustrations`,
        },
        'skills.json': {
            name: 'skills.json',
            language: 'json',
            content: JSON.stringify({
                "technical_skills": {
                    "frontend": {
                        "frameworks": ["React", "Next.js", "Vue.js"],
                        "languages": ["TypeScript", "JavaScript", "HTML5", "CSS3"],
                        "styling": ["Tailwind CSS", "Sass", "Styled Components"],
                        "proficiency": 95
                    },
                    "backend": {
                        "languages": ["Node.js", "Python", "Java"],
                        "frameworks": ["Express", "Django", "Spring Boot"],
                        "databases": ["PostgreSQL", "MongoDB", "Redis"],
                        "proficiency": 88
                    },
                    "design": {
                        "tools": ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
                        "skills": ["UI/UX Design", "Prototyping", "Wireframing", "Brand Identity"],
                        "proficiency": 92
                    }
                },
                "soft_skills": [
                    "Problem Solving",
                    "Team Collaboration",
                    "Project Management",
                    "Communication",
                    "Creative Thinking",
                    "Attention to Detail"
                ],
                "tools_and_platforms": {
                    "version_control": ["Git", "GitHub", "GitLab"],
                    "devops": ["Docker", "AWS", "Vercel", "Netlify"],
                    "testing": ["Jest", "Cypress", "React Testing Library"],
                    "other": ["VS Code", "Postman", "Jira", "Slack"]
                }
            }, null, 2),
        },
        'projects.tsx': {
            name: 'projects.tsx',
            language: 'tsx',
            content: `interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'design' | 'fullstack';
  status: 'completed' | 'in-progress';
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with Next.js and Node.js.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "fullstack",
    status: "completed"
  },
  {
    id: 2,
    title: "Design System",
    description: "Comprehensive UI component library with documentation, built for scalability and consistency across products. Includes 50+ reusable components.",
    technologies: ["React", "TypeScript", "Storybook", "Figma"],
    category: "design",
    status: "completed"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with interactive charts, custom reports, and data export capabilities. Handles millions of data points.",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "fullstack",
    status: "completed"
  },
  {
    id: 4,
    title: "Mobile App Design",
    description: "Complete UI/UX design for a fitness tracking mobile application with user research and prototyping. Includes user flows and high-fidelity mockups.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    category: "design",
    status: "completed"
  },
  {
    id: 5,
    title: "SaaS Platform",
    description: "Multi-tenant SaaS application with subscription management, role-based access, and API integrations. Serving 1000+ active users.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    category: "fullstack",
    status: "in-progress"
  },
  {
    id: 6,
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    category: "design",
    status: "completed"
  }
];

export default function ProjectsShowcase() {
  return (
    <div className="projects-container">
      <h1>Featured Projects</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
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
  location: string;
  availability: string;
}

interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;
  portfolio?: string;
}

const contactInfo: ContactInfo = {
  name: "Fourat Idani",
  role: "Full Stack Developer | Graphic Designer | UI/UX Designer",
  email: "contact@fouratidani.com",
  location: "Available for remote work worldwide",
  availability: "Open to new opportunities"
};

const socialLinks: SocialLinks = {
  linkedin: "https://linkedin.com/in/fourat-idani",
  github: "https://github.com",
  portfolio: "https://fouratidani.com"
};

// Contact preferences
const preferredContactMethods = [
  "Email (fastest response)",
  "LinkedIn message",
  "GitHub discussions for technical topics"
];

// Areas of interest for collaboration
const collaborationInterests = [
  "Full-stack web development projects",
  "UI/UX design consultations",
  "Open-source contributions",
  "Freelance opportunities",
  "Technical mentorship"
];

export { contactInfo, socialLinks, preferredContactMethods, collaborationInterests };`,
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

    return (
        <div className="vscode-wrapper">
            {/* Menu Bar */}
            content={fileContents[activeFile].content}
            language={fileContents[activeFile].language}
                    />
                )}
        </div>

            {/* Status Bar */ }
    <div className="status-bar">
        <div className="status-left">
            <div className="status-item">
                <span>Ln 1, Col 1</span>
            </div>
        </div>
    </div>
        </div >
        </div >
    );
}
