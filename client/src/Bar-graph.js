import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "chart.js/auto"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Bar} from "react-chartjs-2";
import React, {useState,useEffect} from "react";

function BarGraphTest() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["ADE1", "ADE2", "ADE3", "ADE4", "ADE 5"],
      datasets: [
        {
          label: "Total reported Adverse Drug Events",
          data: [500,300,100,50,10],
          borderColor: "rgb(53,162, 135",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Drug Name"
        }
      }
    })
  }, [])

  return (
    <div className="App thumbnail">
      <Bar options={chartOptions} data={chartData} />
    </div>
  )
};


export default BarGraphTest