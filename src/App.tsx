import { useState } from 'react';
import { Instagram, Linkedin, Sun, Moon } from 'lucide-react';

const skills = [
  "Python", "C", "Java", "HTML", "CSS", "React", "Vite", "Tailwind CSS",
  "Node.js", "JavaScript", "Kafka", "Flask", "Django", "MySQL"
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-black text-black dark:text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
            M
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Resume
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-black dark:text-white hover:text-yellow-400"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32 relative flex items-center justify-center h-screen">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi! I'm <span className="text-yellow-400">MANJU</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              I am a tech enthusiast with expertise in multiple technologies. I work with Python, Java, and web technologies.
              I will help you to build innovative solutions for your business.
            </p>
          </div>
        </section>

        {/* Wave Separator */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[120px] fill-gray-100 dark:fill-gray-800 transform rotate-180"
          >
            <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span key={index} className="bg-yellow-400 text-black px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/yourusername" className="text-black dark:text-white hover:text-yellow-400">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/yourusername" className="text-black dark:text-white hover:text-yellow-400">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:your.email@example.com" className="text-black dark:text-white hover:text-yellow-400">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
