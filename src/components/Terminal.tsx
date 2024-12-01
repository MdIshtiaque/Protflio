import { useState, useEffect } from 'react';

const commands = [
  { text: '> Ishtiaque.currentStack', response: '["Laravel", "Vue.js", "MySQL", "Redis", "AWS"]' },
  { text: '> Ishtiaque.expertise', response: '"Full-stack developer with strong backend focus"' },
  { text: '> Ishtiaque.backendSkills', response: `{
    frameworks: ["Laravel", "Node.js"],
    databases: ["MySQL", "PostgreSQL", "Redis"],
    tools: ["Docker", "Git", "PHPUnit"],
    architecture: ["MVC", "REST APIs", "Microservices"]
  }`},
  { text: '> Ishtiaque.currentLocation', response: '"Dhaka, Bangladesh"' },
  { text: '> Ishtiaque.contact()', response: '"ishtiaque@example.com"' }
];

export function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const typeTimer = setTimeout(() => {
        setShowResponse(true);
        const nextTimer = setTimeout(() => {
          setShowResponse(false);
          setCurrentCommand(prev => prev + 1);
        }, 2000);
        return () => clearTimeout(nextTimer);
      }, 1000);
      return () => clearTimeout(typeTimer);
    }
  }, [currentCommand]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-gray-900 dark:bg-black rounded-lg shadow-xl overflow-hidden backdrop-blur-sm">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-900">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-sm text-gray-400">terminal</span>
        </div>
        <div className="p-6 font-mono text-sm">
          {commands.slice(0, currentCommand + 1).map((cmd, index) => (
            <div key={index} className="mb-4">
              <div className="text-green-400">{cmd.text}</div>
              {(index < currentCommand || showResponse) && (
                <div className="text-blue-400 whitespace-pre">{cmd.response}</div>
              )}
            </div>
          ))}
          <div className="inline-block w-2 h-4 bg-white animate-pulse" />
        </div>
      </div>
    </div>
  );
}