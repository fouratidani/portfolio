export default function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                        About Me
                    </h2>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Hello! I'm <span className="font-semibold text-blue-600">Fourat Idani</span>,
                            a passionate Full Stack Developer, Graphic Designer, and UI/UX Designer with a unique
                            blend of technical expertise and creative vision.
                        </p>

                        <p>
                            I specialize in creating seamless digital experiences that not only look stunning but
                            also function flawlessly. My journey in tech has equipped me with a comprehensive skill
                            set that spans from front-end development to back-end architecture, complemented by a
                            keen eye for design aesthetics.
                        </p>

                        <p>
                            With expertise in modern web technologies and design tools, I bring ideas to life by
                            combining clean code with beautiful interfaces. I believe that great design and robust
                            functionality should go hand in hand to create memorable user experiences.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                                <div className="text-gray-700 font-medium">Years Experience</div>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
                                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                                <div className="text-gray-700 font-medium">Projects Completed</div>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
                                <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
                                <div className="text-gray-700 font-medium">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
