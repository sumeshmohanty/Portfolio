import { useState } from "react";
import {
  Code2,
  Smartphone,
  Layout,
  Zap,
  Cloud,
  Brain,
  Network,
} from "lucide-react";

const skillsData = {
  Backend: {
    icon: Code2,
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/50",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    skills: [
      {
        name: "Node.js",
        proficiency: 80,
        level: "Advanced",
        description: "Building scalable server-side applications with Express and NestJS.",
      },
      {
        name: "Python",
        proficiency: 80,
        level: "Advanced",
        description: "Data processing and backend development with Django and FastAPI.",
      },
      {
        name: "Java",
        proficiency: 75,
        level: "Intermediate",
        description: "Enterprise-level applications with Spring Boot.",
      },
      {
        name: "PostgreSQL",
        proficiency: 80,
        level: "Advanced",
        description: "Complex queries, optimization, and database design.",
      },
    ],
  },
  Mobile: {
    icon: Smartphone,
    color: "from-rose-500 to-pink-600",
    borderColor: "border-rose-500/50",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500",
    skills: [
      {
        name: "Swift",
        proficiency: 30,
        level: "Beginner",
        description: "Native iOS development with modern Swift practices.",
      },
    ],
  },
  Frontend: {
    icon: Layout,
    color: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500/50",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-500",
    skills: [
      {
        name: "JavaScript",
        proficiency: 90,
        level: "Advanced",
        description:
          "Used across multiple projects including web development and full-stack applications.",
      },
      {
        name: "React",
        proficiency: 88,
        level: "Advanced",
        description: "Component-based architecture and state management with Redux.",
      },
      {
        name: "Tailwind CSS",
        proficiency: 85,
        level: "Advanced",
        description: "Utility-first CSS framework for rapid UI development.",
      },
      {
        name: "TypeScript",
        proficiency: 82,
        level: "Advanced",
        description: "Type-safe JavaScript for scalable applications.",
      },
    ],
  },
//   Systems: {
//     icon: Zap,
//     color: "from-amber-500 to-orange-600",
//     borderColor: "border-amber-500/50",
//     bgColor: "bg-amber-500/10",
//     textColor: "text-amber-500",
//     skills: [
//       {
//         name: "System Design",
//         proficiency: 80,
//         level: "Advanced",
//         description: "Architecting scalable and reliable distributed systems.",
//       },
//       {
//         name: "Algorithms",
//         proficiency: 78,
//         level: "Advanced",
//         description: "Optimized problem-solving and data structure implementation.",
//       },
//       {
//         name: "Microservices",
//         proficiency: 75,
//         level: "Intermediate",
//         description: "Building loosely coupled, independently deployable services.",
//       },
//     ],
//   },
  Cloud: {
    icon: Cloud,
    color: "from-sky-500 to-cyan-600",
    borderColor: "border-sky-500/50",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-500",
    skills: [
      {
        name: "AWS",
        proficiency: 80,
        level: "Advanced",
        description: "EC2, S3, Lambda, RDS, and serverless architectures.",
      },
      {
        name: "Docker",
        proficiency: 82,
        level: "Advanced",
        description: "Containerization and orchestration with Docker and Kubernetes.",
      },
      {
        name: "CI/CD",
        proficiency: 78,
        level: "Advanced",
        description: "Automated testing, building, and deployment pipelines.",
      },
    ],
  },
  AI: {
    icon: Brain,
    color: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500/50",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-500",
    skills: [
      {
        name: "Machine Learning",
        proficiency: 70,
        level: "Intermediate",
        description: "TensorFlow and scikit-learn for predictive modeling.",
      },
      {
        name: "LLMs",
        proficiency: 75,
        level: "Intermediate",
        description: "Integration of GPT models and prompt engineering.",
      },
      {
        name: "Data Analysis",
        proficiency: 80,
        level: "Advanced",
        description: "Pandas, NumPy, and visualization with Matplotlib and Seaborn.",
      },
    ],
  },
//   Architecture: {
//     icon: Network,
//     color: "from-teal-500 to-emerald-600",
//     borderColor: "border-teal-500/50",
//     bgColor: "bg-teal-500/10",
//     textColor: "text-teal-500",
//     skills: [
//       {
//         name: "SOLID Principles",
//         proficiency: 85,
//         level: "Advanced",
//         description: "Clean code architecture and design patterns.",
//       },
//       {
//         name: "REST APIs",
//         proficiency: 88,
//         level: "Advanced",
//         description: "RESTful API design, versioning, and best practices.",
//       },
//       {
//         name: "GraphQL",
//         proficiency: 75,
//         level: "Intermediate",
//         description: "Query language for flexible and efficient data fetching.",
//       },
//     ],
//   },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const currentData = skillsData[activeCategory];
  const IconComponent = currentData.icon;

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
                <Zap className="h-8 w-8 text-primary" />
                Top Skills Analysis
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="mb-12 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              {Object.keys(skillsData).map((category) => {
                const Icon = skillsData[category].icon;
                const isActive = activeCategory === category;
                const categoryData = skillsData[category];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-full transition-all duration-300 border border-muted-foreground/30 ${
                      isActive
                        ? `${categoryData.bgColor} text-foreground`
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-4 w-4 md:h-5 md:w-5 ${categoryData.textColor}`} />
                    <span className="text-sm md:text-base font-medium">{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Skills Display */}
            <div className="space-y-6">
              {currentData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border/50 hover:border-border transition-all duration-300 hover:bg-card/50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`h-5 w-5 ${currentData.textColor}`} />
                      <h3 className="text-lg md:text-xl font-bold">{skill.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs md:text-sm ${currentData.bgColor} ${currentData.textColor} border ${currentData.borderColor} font-semibold`}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${currentData.color} rounded-full transition-all duration-500`}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      <span className={`ml-3 text-sm font-semibold ${currentData.textColor}`}>
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};