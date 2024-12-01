import { Code2, GitBranch, Globe, Server } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  challenges: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform Backend",
    description: "High-performance e-commerce backend system built with Laravel",
    challenges: "Handled complex product relationships and real-time inventory management",
    technologies: ["Laravel", "MySQL", "Redis", "Vue.js", "Docker"],
    features: [
      "RESTful API with OAuth2",
      "Real-time inventory updates",
      "Advanced caching system",
      "Automated testing with PHPUnit"
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-backend"
  },
  {
    title: "Multi-tenant SaaS Platform",
    description: "Scalable SaaS application with isolated tenant databases",
    challenges: "Implemented secure multi-tenancy and automated deployment pipeline",
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Database per tenant",
      "Automated tenant provisioning",
      "Usage-based billing",
      "Real-time analytics"
    ],
    githubUrl: "https://github.com/yourusername/saas-platform"
  },
  {
    title: "Real-time Chat System",
    description: "Scalable chat application with WebSocket support",
    challenges: "Managed real-time connections for thousands of concurrent users",
    technologies: ["Laravel", "Vue.js", "Redis", "WebSockets", "MySQL"],
    features: [
      "Real-time messaging",
      "File sharing",
      "User presence detection",
      "Message encryption"
    ],
    githubUrl: "https://github.com/yourusername/chat-system"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Featured Projects</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 h-full border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <Server className="text-blue-500" size={24} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <Code2 size={16} />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch size={16} />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}