import { Terminal, Server, Database, Cloud } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Backend Architect & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  System Designer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Crafting robust and scalable backend solutions with a focus on performance, 
                security, and maintainability. Transforming complex requirements into 
                elegant system architectures.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg
                    hover:opacity-90 transition-opacity"
                >
                  View Projects
                  <Terminal size={20} />
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg
                    hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-spin-slow" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Ishtiaque Ferdous"
                className="absolute inset-2 rounded-full object-cover border-4 border-white dark:border-gray-900"
              />
            </div>
            <div className="absolute top-0 -left-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Server size={24} className="text-blue-600" />
            </div>
            <div className="absolute bottom-0 -right-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Database size={24} className="text-purple-600" />
            </div>
            <div className="absolute top-1/2 right-0 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Cloud size={24} className="text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}