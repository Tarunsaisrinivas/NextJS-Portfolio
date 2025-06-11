// components/DownloadsChart.js
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DownloadsChart({ packageName,borderColor, backgroundColor }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchDownloads() {
      try {
        const res = await fetch(
          `https://api.npmjs.org/downloads/range/last-month/${packageName}`
        );
        const data = await res.json();

        const labels = data.downloads.map((item) => item.day);
        const downloads = data.downloads.map((item) => item.downloads);

        setChartData({
          labels,
          datasets: [
            {
              label: `Downloads per day for ${packageName}`,
              data: downloads,
              borderColor: `${borderColor}`,
              backgroundColor:`${backgroundColor}`,
              fill: true,
              tension: 0.3,
            },
          ],
        });
      } catch (error) {
        console.error("Failed to fetch downloads:", error);
      }
    }

    fetchDownloads();
  }, [packageName, borderColor, backgroundColor]);

  if (!chartData) return <p>Loading chart...</p>;

  const options = {
    responsive: true,
    maintainAspectRatio: false, // allow dynamic resizing
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "NPM Downloads (Last 30 Days)" },
    },
    scales: {
      x: {
        ticks: { maxTicksLimit: 10 },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] overflow-x-auto  rounded-lg shadow-md p-2">
      <Line data={chartData} options={options} />
    </div>
  );
}
