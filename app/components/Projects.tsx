export default function Projects() {
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
