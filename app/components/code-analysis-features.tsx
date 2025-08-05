"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layers, 
  Network, 
  TestTube, 
  BarChart3,
  Palette
} from "lucide-react";
import { CodeAnalysisCard } from "./code-analysis-card";

export function CodeAnalysisFeatures() {
  const [active, setActive] = useState<(typeof codeAnalysisCards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const useOutsideClick = (ref: React.RefObject<HTMLElement | null>, callback: () => void) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, callback]);
  };

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Advanced Code Analysis Features
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Leverage AI-powered tools to understand, visualize, and optimize your codebase architecture
          </p>
        </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Features List */}
          <div className="order-2 lg:order-1">
            <AnimatePresence>
              {active && typeof active === "object" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 h-full w-full z-10"
                />
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {active && typeof active === "object" ? (
                <div className="fixed inset-0 grid place-items-center z-[100]">
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon />
                  </motion.button>
                  <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden"
                  >
                    <div className="flex justify-between items-start p-4">
                      <div>
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-bold text-neutral-700"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600"
                        >
                          {active.description}
                        </motion.p>
                      </div>
                      <motion.button
                        layoutId={`button-${active.title}-${id}`}
                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                      >
                        {active.ctaText}
                      </motion.button>
                    </div>
                    <div className="pt-4 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                      >
                        {typeof active.content === "function" ? active.content() : active.content}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>

            <ul className="w-full gap-4">
              {codeAnalysisCards.map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={`card-${card.title}-${id}`}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 rounded-xl cursor-pointer border border-neutral-200 mb-4"
                >
                  <div className="flex gap-4 flex-col md:flex-row">
                    <div className="h-40 w-40 md:h-14 md:w-14 rounded-lg flex items-center justify-center">
                      <card.icon className={`w-8 h-8 md:w-6 md:h-6 ${card.color}`} />
                    </div>
                    <div>
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-medium text-neutral-800 text-center md:text-left"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-neutral-600 text-center md:text-left"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                  >
                    {card.ctaText}
                  </motion.button>
                </motion.div>
              ))}
            </ul>
          </div>

          {/* Right Column - Animated Card */}
          <div className="order-1 lg:order-2 flex justify-center items-center min-h-[600px]">
            <div className="relative">
              <CodeAnalysisCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const codeAnalysisCards = [
  {
    title: "Schema Extraction",
    description: "Extract data schemas and models from your codebase",
    ctaText: "Analyze",
    icon: Database,
    color: "text-green-500",
    content: () => (
      <div>
        <p className="mb-4">
          Our AI-powered schema extraction tool analyzes your codebase to identify data models, relationships, and constraints. 
          It automatically generates comprehensive schema documentation that helps you understand your data structure.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Automatic data model detection</li>
          <li>Relationship mapping between entities</li>
          <li>Constraint identification and validation</li>
          <li>Export to multiple formats (JSON, XML, YAML)</li>
          <li>Visual schema representation</li>
        </ul>
      </div>
    ),
  },
  {
    title: "API Specification",
    description: "Generate OpenAPI specs from controllers and routes",
    ctaText: "Generate",
    icon: Network,
    color: "text-blue-500",
    content: () => (
      <div>
        <p className="mb-4">
          Automatically generate OpenAPI specifications from your existing codebase. 
          Our tool identifies endpoints, parameters, and response schemas to create comprehensive API documentation.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Endpoint discovery and mapping</li>
          <li>Parameter and response schema extraction</li>
          <li>Authentication method detection</li>
          <li>OpenAPI 3.0 compliant output</li>
          <li>Interactive documentation generation</li>
        </ul>
      </div>
    ),
  },
  {
    title: "UML Generation",
    description: "Create UML class diagrams from source code",
    ctaText: "Visualize",
    icon: GitBranch,
    color: "text-purple-500",
    content: () => (
      <div>
        <p className="mb-4">
          Generate UML class diagrams that show classes, attributes, methods, and relationships. 
          Visualize your code architecture with professional-grade diagrams.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Class hierarchy visualization</li>
          <li>Method and attribute mapping</li>
          <li>Relationship type identification</li>
          <li>Export to PNG, SVG, PDF formats</li>
          <li>Interactive diagram navigation</li>
        </ul>
      </div>
    ),
  },
  {
    title: "ERD Generation",
    description: "Generate Entity Relationship Diagrams",
    ctaText: "Map",
    icon: Layers,
    color: "text-orange-500",
    content: () => (
      <div>
        <p className="mb-4">
          Extract database entities, attributes, and relationships to create comprehensive ERD diagrams. 
          Understand your data model at a glance with professional visualizations.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Entity and attribute detection</li>
          <li>Relationship cardinality mapping</li>
          <li>Primary and foreign key identification</li>
          <li>Database schema validation</li>
          <li>Reverse engineering from existing databases</li>
        </ul>
      </div>
    ),
  },
  {
    title: "AST Extraction",
    description: "Analyze Abstract Syntax Trees",
    ctaText: "Parse",
    icon: Code2,
    color: "text-red-500",
    content: () => (
      <div>
        <p className="mb-4">
          Parse and analyze code structure at the syntax level. 
          Understand code flow and identify patterns in your codebase with detailed AST analysis.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Multi-language AST parsing</li>
          <li>Code flow analysis</li>
          <li>Pattern recognition and detection</li>
          <li>Complexity metrics calculation</li>
          <li>Code optimization suggestions</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Architecture Summary",
    description: "Get high-level architecture overview",
    ctaText: "Overview",
    icon: BarChart3,
    color: "text-cyan-500",
    content: () => (
      <div>
        <p className="mb-4">
          Get a bird's-eye view of your application architecture. 
          Identify components, dependencies, and system structure with comprehensive analysis.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Component dependency mapping</li>
          <li>System architecture visualization</li>
          <li>Technology stack identification</li>
          <li>Performance bottleneck detection</li>
          <li>Scalability recommendations</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Design Pattern Detector",
    description: "Identify common design patterns",
    ctaText: "Detect",
    icon: Palette,
    color: "text-pink-500",
    content: () => (
      <div>
        <p className="mb-4">
          Automatically identify design patterns like Singleton, Factory, Observer, and more. 
          Understand your code's architectural patterns and improve maintainability.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Pattern recognition algorithms</li>
          <li>Gang of Four patterns detection</li>
          <li>Custom pattern definition</li>
          <li>Pattern usage statistics</li>
          <li>Refactoring recommendations</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Unit Test Analyzer",
    description: "Evaluate test coverage and quality",
    ctaText: "Analyze",
    icon: TestTube,
    color: "text-yellow-500",
    content: () => (
      <div>
        <p className="mb-4">
          Evaluate test quality, coverage, and effectiveness. 
          Get specific recommendations for improving your test suite and ensuring code reliability.
        </p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Test coverage analysis</li>
          <li>Test quality metrics</li>
          <li>Missing test identification</li>
          <li>Performance impact assessment</li>
          <li>Automated test generation suggestions</li>
        </ul>
      </div>
    ),
  },
];