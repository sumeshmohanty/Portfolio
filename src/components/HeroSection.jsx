import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [displayName, setDisplayName] = useState("Sumesh");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayName((prev) => (prev === "Sumesh" ? "Cypher" : "Sumesh"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span key={displayName} className="text-primary opacity-0 animate-fade-in-delay-1 flip-animation" style={{ perspective: "1000px" }}>
              {displayName}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I design systems that operate smarter, faster, and at scale. Creating dependable platforms from idea to execution by reducing complexity and delivering solutions that drive progress.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#skills" className="cosmic-button">
              Know my skills
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};