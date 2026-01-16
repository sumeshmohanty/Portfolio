import { Code, Calculator, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="mb-12">
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-8">
            I bring 5+ years of experience building scalable, high-performance systems, driven by a deep love for technology across software and hardware, and a focus on reliable engineering.
            Mathematics and logical thinking ground my work, helping simplify complexity and build efficient, precise systems that last.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Web Developer Card */}
          <div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 via-background to-background hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-cyan-500/20">
                  <Code className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-500">Web Developer</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Designing scalable web systems with clean architecture and reliability at the core.
              </p>
            </div>
          </div>
          {/* Mathematics Card */}
          <div className="relative p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/5 via-background to-background hover:border-violet-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent blur-3xl pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-violet-500/20">
                  <Calculator className="h-6 w-6 text-violet-500" />
                </div>
                <h3 className="text-2xl font-bold text-violet-500">Mathematics</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Using logic and algorithms to simplify complexity and design efficient solutions.
              </p>
            </div>
          </div>
          {/* Electronics Card */}
          <div className="relative p-8 rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/5 via-background to-background hover:border-rose-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-transparent blur-3xl pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-rose-500/20">
                  <Zap className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-rose-500">Electronics</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Building solutions that bridge software and hardware with embedded systems expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a
            href="#"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};