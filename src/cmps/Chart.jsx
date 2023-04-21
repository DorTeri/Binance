import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { utilService } from '../services/util.service';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        // title: {
        //     display: false,
        //     text: 'Chart.js Line Chart',
        // },
    },
};

export function getLabel(value) {
    const date = new Date(value)
    return date.toLocaleTimeString()
}

export function Chart({chartData}) {
    const { name, values, description } = chartData

    const data = {
        labels: values.map(value => getLabel(value.x)),
        datasets: [
            {
                label: name,
                data: values.map(value => value.y),
                borderColor: utilService.getRandomColor(),
            },
        ],
    };

    return (
        <div className='chart'>
            <Line options={options} data={data} />
            <p>{description}</p>
        </div>
    )
}