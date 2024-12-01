import { Database, Server, Tool, Code, Cloud, Lock, Zap, GitBranch } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: <Server className="text-blue-500" size={24} />,
    skills: [
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    title: "Frontend Development",
    icon: <Code className="text-purple-500" size={24} />,
    skills: [
      { name: "Vue.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 85 },
      { name: "Responsive Design", level: 80 }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-green-500" size={24} />,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="text-sky-500" size={24} />,
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 85 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}