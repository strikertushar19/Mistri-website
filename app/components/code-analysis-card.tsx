"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layers, 
  Network, 
  Search, 
  TestTube, 
  Zap 
} from "lucide-react";

export function CodeAnalysisCard() {
  return (
    <Card>
      <CardSkeletonContainer>
        <CodeAnalysisSkeleton />
      </CardSkeletonContainer>
      {/* <CardTitle>Code Analysis Features</CardTitle> */}
      {/* <CardDescription>
        Advanced AI-powered tools to analyze, visualize, and optimize your codebase architecture.
      </CardDescription> */}
    </Card>
  );
}

const CodeAnalysisSkeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".analysis-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-6",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-7",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".analysis-8",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-lg">
        <Container className="h-12 w-12 md:h-16 md:w-16 analysis-1">
          <Code2 className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
        </Container>
        <Container className="h-16 w-16 md:h-20 md:w-20 analysis-2">
          <Database className="h-8 w-8 md:h-10 md:w-10 text-green-400" />
        </Container>
        <Container className="h-12 w-12 md:h-16 md:w-16 analysis-3">
          <GitBranch className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
        </Container>
        <Container className="h-16 w-16 md:h-20 md:w-20 analysis-4">
          <Layers className="h-8 w-8 md:h-10 md:w-10 text-orange-400" />
        </Container>
        <Container className="h-12 w-12 md:h-16 md:w-16 analysis-5">
          <Network className="h-6 w-6 md:h-8 md:w-8 text-red-400" />
        </Container>
        <Container className="h-16 w-16 md:h-20 md:w-20 analysis-6">
          <Search className="h-8 w-8 md:h-10 md:w-10 text-cyan-400" />
        </Container>
        <Container className="h-12 w-12 md:h-16 md:w-16 analysis-7">
          <TestTube className="h-6 w-6 md:h-8 md:w-8 text-pink-400" />
        </Container>
        <Container className="h-16 w-16 md:h-20 md:w-20 analysis-8">
          <Zap className="h-8 w-8 md:h-10 md:w-10 text-yellow-400" />
        </Container>
      </div>

      <div className="h-60 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-16 h-48 top-1/2 -translate-y-1/2 absolute -left-16">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-yellow-200"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]
        "max-w-sm w-full mx-auto p-8 rounded-xl border  group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-white "
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
}; 