import React from 'react';
import DoughnutChart from '../DoughnutChart';

function Card2({ name, img }) {
	return (
		<div className="relative rounded-2xl px-2 py-1 text-sm" style={{ backgroundColor: '#FFFFFF', width: '210px' }}>
			<div className=" flex justify-between p-1">
				<p>{name}</p>
				<img src={img} className="w-5 h-5  rounded-md text-white" style={{ backgroundColor: '#5C9CE5' }} />
			</div>

			<DoughnutChart
				data={{
					datasets: [
						{
							// labels: "weather",
							data: [ 30, 30, 30, 30, 30 ],
							fill: true,
							// borderColor: '#5C9CE5',
							backgroundColor: [ '#5C9CE5', '#5C9CE5', '#DCDCDC', '#DCDCDC', '#DCDCDC', '#DCDCDC' ],
							needleValue: 2,
							borderWidth: 1,
							cutout: '80%',
							circumference: 180,
							rotation: 270,
							borderRadius: 5
						}
					]
				}}
			/>
			<h1 className="flex justify-center items-center text-md font-bold absolute bottom-3 w-36">8 km/h</h1>
		</div>
	);
}

export default Card2;
