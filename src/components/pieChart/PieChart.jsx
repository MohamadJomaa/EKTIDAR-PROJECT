import "./pie.scss"
//import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import PieChartIcon from '@mui/icons-material/PieChart';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {

    return (
            <div className="piechart">
              <div className="top">
                <h1 className="title">Pie Chart</h1>
                <PieChartIcon fontSize="small"/>
              </div>
              <div className="Pie">
                <Pie  
                  data={{
                    labels: ['LU', 'LAU', 'LIU', 'USJ', 'AUB', 'BAU'],
                    datasets: [
                      {
                        
                        data: [15, 17, 3, 10, 10, 5],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                        label: '# of Votes',
                      },
                    ],
                   // label: '# of Votes'

                  }
                }
                />   
             </div>
            </div>
    )
}

export default PieChart;