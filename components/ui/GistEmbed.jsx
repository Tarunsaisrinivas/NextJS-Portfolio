"use client";

import React from "react";

const GistEmbed = ({ gistId }) => {
  const src = `https://gist.github.com/${gistId}.pibb`;

  return (
    <iframe
      src={src}
      frameBorder="0"
      className="w-full h-96 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md bg-blue-100 dark:bg-blue-900"
      title={`Gist ${gistId}`}
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default GistEmbed;
