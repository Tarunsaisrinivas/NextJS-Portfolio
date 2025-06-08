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

export default function DownloadsChart({ packageName }) {
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
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
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
  }, [packageName]);

  if (!chartData) return <p>Loading chart...</p>;

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "NPM Downloads (Last 30 days)" },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10, // avoid overcrowding x-axis
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} className="bg-white dark:bg-black" />;
}
