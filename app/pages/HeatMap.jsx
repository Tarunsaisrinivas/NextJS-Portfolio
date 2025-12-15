"use client";

import { GitHubCalendar } from "react-github-calendar";

const HeatMap = () => {
    return (
        <div className="flex justify-center py-8 bg-white dark:bg-black">
            <GitHubCalendar username="Tarunsaisrinivas" />
        </div>
    )
};

export default HeatMap;
