export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Design System',
            description: 'Comprehensive UI component library with documentation, built for scalability and consistency across products.',
            tags: ['React', 'TypeScript', 'Storybook', 'Figma'],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization platform with interactive charts, custom reports, and data export capabilities.',
            tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: 'Mobile App Design',
            description: 'Complete UI/UX design for a fitness tracking mobile application with user research and prototyping.',
            tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
            gradient: 'from-orange-500 to-red-500',
        },
        {
            title: 'SaaS Platform',
            description: 'Multi-tenant SaaS application with subscription management, role-based access, and API integrations.',
            tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
            gradient: 'from-indigo-500 to-blue-500',
        },
        {
            title: 'Brand Identity',
            description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
            tags: ['Adobe Illustrator', 'Photoshop', 'Branding', 'Print Design'],
            gradient: 'from-pink-500 to-rose-500',
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
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
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
}
