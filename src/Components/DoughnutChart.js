import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart({ data }) {
	const gaugeNeedle = {
		id: 'gaugeNeedle',
		afterDatasetsDraw(chart, args, Options) {
			const { ctx, config, data, chartArea: { top, bottom, left, right, width, height } } = chart;

			ctx.save();

			const needleValue = data.datasets[0].needleValue;
			const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
			const angle = Math.PI + 1 / dataTotal * needleValue * Math.PI;
			// console.log(angle)

			const cx = width / 2;
			const cy = height - 16;
			// const cy = chart.metasets[0].data[0].y;

			// needle
			ctx.translate(cx, cy);
			// ctx.rotate(angle);
			ctx.beginPath();
			ctx.moveTo(0, -1);
			// ctx.lineTo(height, 0)
			ctx.lineTo(height - (ctx.canvas.offsetTop + 10), 0);
			ctx.lineTo(0, 2);
			ctx.fillStyle = '#5C9CE5';
			ctx.fill();

			// neddle dot
			ctx.translate(-cx, -cy);
			ctx.beginPath();
			ctx.arc(cx, cy, 4, 0, 9);
			ctx.fill();
		}
	};

	return (
		<div className="flex justify-center h-20 -mt-4 relative -top-3">
			<Doughnut data={data} plugins={[ gaugeNeedle ]} />
		</div>
	);
}

export default DoughnutChart;
