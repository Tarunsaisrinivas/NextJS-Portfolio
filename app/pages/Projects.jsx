"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Iphone15Pro from "../../components/ui/iphone-15-pro";
import Safari from "../../components/ui/safari";
import Button from "../../components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import ShimmerButton from "@/components/ui/shimmer-button";
import { FaGithub } from "react-icons/fa";
import { PiShareBold } from "react-icons/pi";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    id: 1,
    title: "EnviroWatch",
    description:
      "This proposal introduces an innovative app to enhance citizen engagement in addressing local environmental issues. By enabling users to report concerns with location tagging and multimedia, the app bridges communication gaps and empowers communities, providing authorities with actionable insights for targeted, sustainable interventions.",
    image: "/envirowatch.jpg",
    github: "https://github.com/Tarunsaisrinivas/Envirowatch.git",
    live: "https://drive.google.com/file/d/10DrLnvdD2dCxIVzWyXLagbyoZkc8TxeJ/view?usp=sharing",
  },
  {
    id: 2,
    title: "Chat Application ",
    description:
      "This real-time chat application, built with Pusher.js, ensures seamless communication and robust security with end-to-end encryption. Users can join by entering their name, enjoying fast, private, and secure messaging.",
    website: "https://pusherchat.vercel.app",
    image: "/pusherjs.png",
    github: "https://github.com/Tarunsaisrinivas/Next-js-chat.git",
    live: "https://pusherchat.vercel.app",
  },
  {
    id: 3,
    title: "SRKR CSE Department Website",
    description:
      "A departmental website for SRKR CSE, for accessing Lecture Notes, Contact details, Events, News , Timetables, Syllabus and so on.",
    image:"/srkrcse.png",
    website: "https://srkrcse.com/",
    github: "https://github.com/Tarunsaisrinivas/SRKR-CSE.git",
    live: "https://srkrcse.com/",
  },
];

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div
      id="projects"
      data-aos="fade-up"
      className="flex flex-col dark:bg-black bg-white gap-8 p-4"
    >
      <h1 className="text-center mt-0 text-2xl font-mono font-bold mb-4">
        PROJECTS
      </h1>
      {/* Projects Component */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Side */}
        <div className="w-full md:w-1/3 bg-transparent p-4 rounded-lg shadow">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer p-4 rounded-lg border ${
                  selectedItem.id === item.id
                    ? "border-blue-500 bg-blue-50 text-black"
                    : "border-gray-200"
                } hover:bg-gray-200 hover:text-black`}
                onClick={() => setSelectedItem(item)}
              >
                <h3 className="text-lg font-semibold ">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
                <div className="flex gap-5">
                  <a href={item.github}>
                    <ShimmerButton className="shadow-2xl flex items-center mb-2 mt-2 md:mb-0">
                      <FaGithub className="dark:text-white mr-2" />{" "}
                      {/* GitHub Icon */}
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                        Github
                      </span>
                    </ShimmerButton>
                  </a>
                  <a href={item.live}>
                    <ShimmerButton className="shadow-2xl flex items-center mb-2 mt-2 md:mb-0">
                      <PiShareBold className="dark:text-white mr-2" />{" "}
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                        Live Preview
                      </span>
                    </ShimmerButton>
                  </a>
                </div>
              </li>
            ))}
            <Link href="/projects">
              <ShimmerButton className="shadow-2xl border border-white flex items-center mb-2 mt-2 md:mb-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                  View More
                </span>
              </ShimmerButton>
            </Link>
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 flex items-center md:h-auto h-[250px]  justify-center p-4 rounded-lg shadow relative">
          {selectedItem.id === 1 && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <Iphone15Pro
                src={selectedItem.image}
                className="w-full h-full min-h-full max-h-full object-cover"
              />
            </div>
          )}
          {selectedItem.website && (
            <Safari
              url={selectedItem.website}
              className="w-full h-full"
              imageSrc={selectedItem.image}
            />
          )}
          {!selectedItem.website && selectedItem.id !== 1 && (
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={500}
              height={300}
              className="rounded-lg w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
