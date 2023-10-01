import "./chart.scss"
import BarChartIcon from '@mui/icons-material/BarChart';
import { Bar } from 'react-chartjs-2'; 
//import faker from 'faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const Chart = () => {

     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        },
      };
      
      const labels = ['Chm', 'CS', 'Math', 'Bio', 'Phy'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'LU',
            data: [10,20,30,40],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'LAU',
            data: [10,20,30,40],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'LIU',
            data: [10,20,30,40],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
          },
        ],
      };

    return(
        <div className="barChart">
            <div className="top">
                <h1 className="title">Bar Chart</h1>
                <BarChartIcon fontSize="small"/>
            </div>
            <div className="Bar">
                <Bar options={options} data={data}  />
            </div>

        </div>
    )
}
export default Chart;