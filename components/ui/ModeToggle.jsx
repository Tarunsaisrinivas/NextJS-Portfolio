"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "./button";
import { Command } from "./command";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Use useEffect to listen for keydown event
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.key === "x" || event.key === "X") &&
        (event.ctrlKey || event.metaKey)
      ) {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme]);

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        className="border-none bg-transparent"
        size="icon"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-medium text-muted-foreground">
        ⌘+X
      </kbd>
    </div>
  );
}
