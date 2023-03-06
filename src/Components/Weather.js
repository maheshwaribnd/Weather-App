import React from 'react';
import Cards from './Cards';
import ShowGraph from './ShowGraph';

function WeatherCard() {
	return (
		<div
			className="rounded-3xl px-9 py-1 font-serif"
			style={{ backgroundColor: '#E4F1FF', position: 'relative', left: '-25px', height: '700px', width: '750px' }}
		>
			<div className="flex justify-between p-2">
				<div>
					<h1 className="font-extrabold">Welcome back Isabella!</h1>
					<p>Check out todays's weather information</p>
				</div>
				<div className="flex gap-2">
					<p className="font-bold">...</p>
					<img
						src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
						alt=""
						className="w-6 h-6 border-2 rounded"
					/>
				</div>
			</div>
			<ShowGraph />
			<p className="font-bold text-sm pt-3 pb-2">More details of today's weather</p>
			<Cards />
		</div>
	);
}

export default WeatherCard;
