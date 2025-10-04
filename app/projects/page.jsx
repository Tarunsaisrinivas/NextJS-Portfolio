"use client";
import projects from "./data.json";
import Image from "next/image";
import Navbar from "../containers/Navbar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ProjectsPage() {
  const categories = ["all", "web", "mobile", "games"];

  // helper to filter by category
  const getProjects = (category) => {
    if (category === "all") return projects;
    return projects.filter((p) => p.category === category);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-black dark:text-white p-6">
        <Tabs defaultValue="all" className="w-full">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-6">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="capitalize">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {getProjects(cat).map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white dark:bg-[#06202B] dark:text-white border-gray-500 dark:border-white border-2 rounded-xl shadow-lg p-4 w-full max-w-sm m-4"
                  >
                    {/* Image */}
                    <div className="w-full h-48 relative rounded-md overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-4 flex-grow">
                      <p className="text-xs dark:text-white text-gray-400 mt-2">
                        Project {index + 1}
                      </p>
                      <h3 className="text-xl text-black dark:text-white font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">{project.date}</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between text-sm pt-4 mt-auto">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        className="text-blue-600 hover:scale-110 dark:text-blue-300 hover:underline flex items-center gap-1"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Source Code
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className="text-green-600 hover:scale-110 hover:underline flex items-center gap-1"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
