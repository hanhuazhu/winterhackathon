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
import {Doughnut} from "react-chartjs-2";
import React, {useState,useEffect} from "react";
import {Colors} from "chart.js";
// import {ade, amount} from "./Drug-search-bar";

const PieGraph1=({foundAdverseEvents}) => {
useEffect(() => {
  console.log("foundAdverseEvents within Pie Chart", foundAdverseEvents);
}, [foundAdverseEvents])
foundAdverseEvents !== undefined && console.log('%cfoundAdverEvents', foundAdverseEvents, "color:green")
// function PieGraph1() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  Chart.register(Colors);
  const options = {
    plugins: {
      colors: {
        forceOverride: true
      }
    }
  };
  
  
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: foundAdverseEvents.ade,
      datasets: [
        {
          label: "Total reported side effects",
          data: foundAdverseEvents.amount,
          borderColor: "rgb(53,162, 135",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
          hoverBorderColor: "rgb(235, 64, 52)"
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "right"
        },
        title: {
          display: true,
          text: "Drug Name"
        }
      }
    })
  }, [foundAdverseEvents])

  return (
    <div className="App thumbnail">
      <Doughnut options={chartOptions} data={chartData} />
    </div>
  )
};


export default PieGraph1