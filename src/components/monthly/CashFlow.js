import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement
  } from 'chart.js';

ChartJS.register(CategoryScale);
ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale
    
);

const CashFlow = ({ spending, income }) => {
  const data = {
    labels: ['Spending', 'Income'],
    datasets: [
      {
        label: 'Cash Flow',
        backgroundColor: ['#f6c2cb', '#2d70a2'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [spending, income]
      }
    ]
  };

  return (
    <div className='cash-flow-container'>
      <h4>Cash Flow</h4>
      <div className='bar-chart'>    
        <Bar
            data={data}
            width={100}
            height={50}
            options={{
                scales: {
                y: {
                    type: 'linear',
                    ticks: {
                    beginAtZero: true
                    }
                }
                }
            }}
        />
      </div>
    </div>
  );
};

export default CashFlow;
