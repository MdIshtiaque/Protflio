interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Backend Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    achievements: [
      "Led development of microservices architecture handling 1M+ daily users",
      "Reduced API response time by 60% through caching and optimization",
      "Mentored junior developers and established coding standards"
    ]
  },
  {
    title: "Backend Developer",
    company: "StartupX",
    period: "2019 - 2021",
    achievements: [
      "Designed and implemented scalable REST APIs",
      "Integrated third-party services and payment gateways",
      "Improved system reliability with comprehensive test coverage"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.title} className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company} • {exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}