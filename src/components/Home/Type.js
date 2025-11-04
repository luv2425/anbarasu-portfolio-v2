import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "React / Next.js Engineer",
          "Node.js API Developer",
          "TypeScript Enthusiast",
          "CI/CD & DevOps Ready",
          "AI-Adapted with Cursor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
