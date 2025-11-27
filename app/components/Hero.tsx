import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen gradient-blue flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center animate-fadeInUp">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/profile-header.png"
                  alt="Fourat Idani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="w-full md:w-2/3 text-white text-center md:text-left animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              FOURAT IDANI
            </h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-xl md:text-2xl mb-8 font-light">
              <span className="text-blue-200">FULL STACK DEVELOPER</span>
              <span className="hidden md:inline text-blue-300">|</span>
              <span className="text-blue-200">GRAPHIC DESIGNER</span>
              <span className="hidden md:inline text-blue-300">|</span>
              <span className="text-blue-200">UI/UX DESIGNER</span>
            </div>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Crafting beautiful digital experiences through code and design. 
              Passionate about creating innovative solutions that merge aesthetics with functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
