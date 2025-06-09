"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const MonacoEditor = dynamic(() => import("react-monaco-editor"), { ssr: false });

const CodeCompilerPage = () => {
  const [code, setCode] = useState(`console.log("Hello from JS!");`);
  const [output, setOutput] = useState("");

  const handleCompile = async () => {
    setOutput("⏳ Compiling...");

    try {
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => logs.push(args.join(" "));

      // eslint-disable-next-line no-eval
      eval(code);

      console.log = originalLog;
      setOutput(logs.join("\n") || "✅ No output");
    } catch (err) {
      setOutput(`❌ Error:\n${err.message}`);
    }
  };

  return (
    <>
    
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 JavaScript Code Runner</h1>

      <div className="h-[400px] border rounded mb-4 overflow-hidden">
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(newValue) => setCode(newValue)}
          options={{ automaticLayout: true }}
        />
      </div>

      <Button onClick={handleCompile} className="mb-4">
        Run Code
      </Button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">🖥️ Output</h2>
        <Textarea
          rows={10}
          readOnly
          value={output}
          className="w-full font-mono text-sm"
        />
      </div>
    </div>
    </>
  );
};

export default CodeCompilerPage;
