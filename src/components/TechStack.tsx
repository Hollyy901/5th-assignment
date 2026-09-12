import { useState } from "react";
import toast from "react-hot-toast";

interface TechItem {
  id: string;
  name: string;
  badge?: string;
  description: string;
  category: string;
  level: string;
  rating: string;
  icon: string;
}

const technologies: TechItem[] = [
  {
    id: "react",
    name: "React",
    badge: "Popular",
    description: "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id: "vue",
    name: "Vue.js",
    badge: "Versatile",
    description: "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  },
  {
    id: "svelte",
    name: "Svelte",
    badge: "Fast",
    description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    id: "nodejs",
    name: "Node.js",
    badge: "Standard",
    description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: "4.8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    badge: "Top SQL",
    description: "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    id: "redis",
    name: "Redis",
    badge: "Cache",
    description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: "4.8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
  },
  {
    id: "javascript",
    name: "JavaScript",
    badge: "Ubiquitous",
    description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    id: "typescript",
    name: "TypeScript",
    badge: "Essential",
    description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    id: "java",
    name: "Java",
    badge: "Robust",
    description: "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: "4.6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    badge: "Modern",
    description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    id: "docker",
    name: "Docker",
    badge: "Containers",
    description: "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: "4.9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  }
];

export default function TechStack() {
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);

  const toggleStack = (tech: TechItem) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
      toast.error(`Removed ${tech.name} from stack`);
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`Added ${tech.name} to stack!`);
    }
  };

  const removeAll = () => {
    setSelectedStack([]);
    toast("Stack cleared!", { icon: "🧹" });
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);
            return (
              <div
                key={tech.id}
                className="bg-gray-50/50 border border-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    {tech.badge && (
                      <span className="text-xs font-medium text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full">
                        {tech.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[48px]">
                    {tech.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 my-4">
                    <span>{tech.category}</span>
                    <span>{tech.level}</span>
                    <span className="text-amber-500 font-semibold">★ {tech.rating}</span>
                  </div>
                  <button
                    onClick={() => toggleStack(tech)}
                    className={`w-full py-2.5 text-xs font-semibold rounded-lg transition ${
                      isAdded
                        ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {isAdded ? "Remove from Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-6 h-fit sticky top-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-gray-900">Your Stack</h3>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            {selectedStack.length} Technologies Selected
          </p>

          {selectedStack.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">
              No technologies added yet.
            </p>
          ) : (
            <div className="space-y-3 mb-6">
              {selectedStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-800">{tech.name}</span>
                  </div>
                  <button
                    onClick={() => toggleStack(tech)}
                    className="text-gray-400 hover:text-red-500 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {selectedStack.length > 0 && (
            <button
              onClick={removeAll}
              className="w-full py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}