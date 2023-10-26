import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';


// Sample raw data
const rawData = [
    { campaign: 'A', click: 30, cost:50, conversions: 8, revenue:2000 },
    { campaign: 'B', click: 50, cost:50, conversions: 5, revenue:3000 },
    { campaign: 'C', click: 10, cost:50, conversions: 2, revenue:3500 },
    { campaign: 'D', click: 1000, cost:50, conversions: 9, revenue:4500 },
    { campaign: 'E', click: 40, cost:50, conversions: 3, revenue:1000 },
  ];
  
  const AddInsight = () => {
    // State to store chart data
    const [chartData, setChartData] = useState({
      labels: rawData.map(item => item.campaign),
      datasets: [{
        data: rawData.map(item => item.click),
        data: rawData.map(item => item.cost),
        data: rawData.map(item => item.conversions),
        data: rawData.map(item => item.revenue),
        
        
        backgroundColor: ['#800080', '#36A2EB', '#2AAA8A', '#FFA500', '#FFC0CB'], // Specify colors as needed
      }],
    });
  
    // Table rendering function
    const renderTable = () => (
        <div className="p-20 m-20 border border-gray-500 ">
      <table>
        <thead>
          <tr>
            <th className='p-2 m-2'>campaign</th>
            <th className='p-2 m-2'>click</th>
            <th className='p-2 m-2'>cost</th>
            <th className='p-2 m-2'>conversions</th>
            <th className='p-2 m-2'>revenue</th>
          </tr>
        </thead>
        <tbody>
          {rawData.map(item => (
            <tr key={item.campaign}>
              <td>{item.campaign}</td>
              <td>{item.click}</td>
              <td>{item.cost}</td>
              <td>{item.conversions}</td>
              <td>{item.revenue}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      </div>
    );
  
    return (
      <div className="flex space-between ">
        {renderTable()}
        <div className="p-10 m-10 20px border border-gray-500 ">
          <Doughnut data={chartData} />
        </div>
      </div>
    );
  };
  
  export default AddInsight;