"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';




export default function Draw(){

  const data = useSelector((state) => state.dataReducer.data);
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='Time' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="USE" stroke="green" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="GBP" stroke="red"  />
          <Line type="monotone" dataKey="EUR" stroke="blue" />
        </LineChart>
      </ResponsiveContainer>
    );
}
