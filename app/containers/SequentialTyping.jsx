// components/SequentialHyperText.js
import HyperText from '@/components/ui/hyper-text';
import React, { useEffect, useState } from 'react';

const skills = [
  { text: "Frontend Developer", highlight: "Frontend" },
  { text: "Mobile Developer", highlight: "Mobile" },
  { text: "UI/UX Developer", highlight: "UI/UX" },
];

const SequentialHyperText = () => {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeSkill = () => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
      setCurrentSkill(skills[index]);
    };

    const timer = setInterval(changeSkill, 3000); // Change skill every 3 seconds
    return () => clearInterval(timer);
  }, [index]);

  return (
    <HyperText
      className="text-3xl text-center font-bold text-black dark:text-white mt-4"
      text={currentSkill.text}
      highlight={currentSkill.highlight}
    />
  );
};

export default SequentialHyperText;
