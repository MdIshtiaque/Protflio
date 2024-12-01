import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { BackgroundGrid } from './components/BackgroundGrid';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
        <BackgroundGrid />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Terminal />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;