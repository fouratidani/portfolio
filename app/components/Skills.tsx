export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React / Next.js', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'HTML/CSS', level: 98 },
            ],
            color: 'blue',
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 88 },
                { name: 'Python', level: 85 },
                { name: 'Database (SQL/NoSQL)', level: 82 },
                { name: 'REST APIs', level: 90 },
            ],
            color: 'green',
        },
        {
            title: 'Design',
            skills: [
                { name: 'UI/UX Design', level: 92 },
                { name: 'Figma', level: 95 },
                { name: 'Adobe Creative Suite', level: 88 },
                { name: 'Graphic Design', level: 90 },
            ],
            color: 'purple',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; bar: string; text: string } } = {
            blue: { bg: 'bg-blue-100', bar: 'bg-blue-600', text: 'text-blue-600' },
            green: { bg: 'bg-green-100', bar: 'bg-green-600', text: 'text-green-600' },
            purple: { bg: 'bg-purple-100', bar: 'bg-purple-600', text: 'text-purple-600' },
        };
        return colors[color];
    };

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                    Skills & Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => {
                        const colors = getColorClasses(category.color);
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className={`text-2xl font-bold mb-6 ${colors.text}`}>
                                    {category.title}
                                </h3>
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div key={skillIdx}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-700">{skill.name}</span>
                                                <span className="text-gray-500">{skill.level}%</span>
                                            </div>
                                            <div className={`w-full ${colors.bg} rounded-full h-2.5`}>
                                                <div
                                                    className={`${colors.bar} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
