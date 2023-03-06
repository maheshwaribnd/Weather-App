import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend
} from 'chart.js/auto';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = ({ data }) => {
	const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		}
	};

	const arbitraryLine = {
		id: 'arbitraryLine',
		afterDatasetsDraw(chart, args, pluginOptions) {
			const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;

			ctx.beginPath();
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'gray';
			ctx.moveTo(x.getPixelForValue(1), top);
			ctx.lineTo(x.getPixelForValue(1), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(2), top);
			ctx.lineTo(x.getPixelForValue(2), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(3), top);
			ctx.lineTo(x.getPixelForValue(3), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(4), top);
			ctx.lineTo(x.getPixelForValue(4), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(5), top);
			ctx.lineTo(x.getPixelForValue(5), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(6), top);
			ctx.lineTo(x.getPixelForValue(6), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(7), top);
			ctx.lineTo(x.getPixelForValue(7), bottom);
			ctx.stroke();
			ctx.moveTo(x.getPixelForValue(8), top);
			ctx.lineTo(x.getPixelForValue(8), bottom);
			ctx.stroke();
		}
	};

	return (
		<div style={{ width: '600px', height: '180px' }}>
			<Line data={data} plugins={[ arbitraryLine ]} options={options} />
		</div>
	);
};

export default LineChart;
