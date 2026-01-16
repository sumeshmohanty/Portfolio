import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [mathSymbols, setMathSymbols] = useState([]);
  const [codeElements, setCodeElements] = useState([]);
  const [circuitLines, setCircuitLines] = useState([]);

  const mathSymbolsList = ["∑", "∫", "∂", "∞", "√", "π", "Δ", "θ", "λ", "∇", "≈", "≠", "±"];
  const codeSymbols = ["{ }", "< >", "/ \\", "||", "&&", "=>", "::", "function", "const", "class"];

  useEffect(() => {
    generateMathSymbols();
    generateCodeElements();
    generateCircuitLines();

    const handleResize = () => {
      generateMathSymbols();
      generateCodeElements();
      generateCircuitLines();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateMathSymbols = () => {
    const numberOfSymbols = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    const newSymbols = [];
    for (let i = 0; i < numberOfSymbols; i++) {
      newSymbols.push({
        id: `math-${i}`,
        symbol: mathSymbolsList[Math.floor(Math.random() * mathSymbolsList.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 14,
        opacity: Math.random() * 0.2 + 0.05,
        duration: Math.random() * 8 + 6,
      });
    }
    setMathSymbols(newSymbols);
  };

  const generateCodeElements = () => {
    const numberOfElements = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );

    const newElements = [];
    for (let i = 0; i < numberOfElements; i++) {
      newElements.push({
        id: `code-${i}`,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 14 + 10,
        opacity: Math.random() * 0.15 + 0.05,
        duration: Math.random() * 10 + 8,
      });
    }
    setCodeElements(newElements);
  };

  const generateCircuitLines = () => {
    const numberOfLines = 3;
    const newLines = [];
    
    for (let i = 0; i < numberOfLines; i++) {
      newLines.push({
        id: `circuit-${i}`,
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 10,
      });
    }
    setCircuitLines(newLines);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {circuitLines.map((line) => (
          <g key={line.id}>
            <line
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-cyan-500"
            />
            <circle
              cx={`${line.x1}%`}
              cy={`${line.y1}%`}
              r="2"
              fill="currentColor"
              className="text-cyan-500"
              style={{
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${line.delay}s`,
              }}
            />
            <circle
              cx={`${line.x2}%`}
              cy={`${line.y2}%`}
              r="2"
              fill="currentColor"
              className="text-cyan-500"
              style={{
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${line.delay + 1}s`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Background Stars */}
      {/* Removed - now featuring Math and Code elements only */}

      {/* Math Symbols - Floating */}
      {mathSymbols.map((sym) => (
        <div
          key={sym.id}
          className="absolute font-bold pointer-events-none"
          style={{
            left: sym.x + "%",
            top: sym.y + "%",
            fontSize: sym.size + "px",
            opacity: sym.opacity,
            color: "hsl(187 76% 39%)",
            animation: `float ${sym.duration}s ease-in-out infinite`,
            fontFamily: "serif",
          }}
        >
          {sym.symbol}
        </div>
      ))}

      {/* Code Elements - Floating */}
      {codeElements.map((elem) => (
        <div
          key={elem.id}
          className="absolute font-mono pointer-events-none font-bold"
          style={{
            left: elem.x + "%",
            top: elem.y + "%",
            fontSize: elem.size + "px",
            opacity: elem.opacity,
            color: "hsl(187 85% 42%)",
            animation: `float ${elem.duration}s ease-in-out infinite`,
            animationDirection: "alternate",
          }}
        >
          {elem.symbol}
        </div>
      ))}

      {/* Meteors */}
      {/* Removed - now featuring Math and Code elements only */}
    </div>
  );
};