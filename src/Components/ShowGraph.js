import React from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import LineChart from './lineChart';

function ShowGraph() {
	return (
		<div
			className=" px-6 py-3 rounded-2xl bg-white text-sm"
			style={{ backgroundColor: '#FFFFFF', width: '660px', height: '300px' }}
		>
			<div className="flex justify-between">
				<h2>Upcoming hours</h2>
				<div className="flex justify-between gap-4">
					<button className="pl-2 h-6 w-36 mb-3 border-2 rounded-3xl bg-gray-100 text-gray-400">
						Rain precipitation<ExpandMoreRoundedIcon className="text-gray-400" />
					</button>
					<button className="pl-2 h-6 w-28 mb-3 border-2 rounded-3xl bg-gray-200 font-semibold">
						Next days<ChevronRightRoundedIcon />
					</button>
				</div>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<p className="text-xs">Now</p>
					<img src="https://img.icons8.com/sf-regular/48/null/sun.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">27°</p>
				</div>

				<div className="flex flex-col">
					<p className="text-xs">11.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/sun.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">28°</p>
				</div>

				<div className="flex flex-col">
					<p className="text-xs">12.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/cloud.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">28°</p>
				</div>

				<div className="flex flex-col">
					<p className="text-xs">13.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/cloud.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">29°</p>
				</div>

				<div className="flex flex-col">
					<p className="text-xs">14.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/sun.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">30°</p>
				</div>

				<div className="flex flex-col">
					<p className="text-xs">15.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/cloud.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">29°</p>
				</div>
				<div className="flex flex-col">
					<p className="text-xs">16.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/cloud.png" className="w-4 h-4" />
					<p className="font-semibold text-xs">29°</p>
				</div>

				<div className="flex flex-col">
					<p className="text-xs">17.00</p>
					<img src="https://img.icons8.com/sf-regular/48/null/sun.png" className="w-4 h-4 " />
					<p className="font-semibold text-xs">28°</p>
				</div>
			</div>

			<LineChart
				data={{
					labels: [ '23%', '29%', '58%', '75%', '33%', '20%', '73%', '49%' ],
					datasets: [
						{
							label: 'weather',
							data: [ 27, 28, 28, 29, 30, 29, 29, 28 ],
							fill: true,
							// borderColor: '#5C9CE5',
							// backgroundColor: ['#5C9CE5'],

							tension: 0.3
						}
					]
				}}
			/>
		</div>
	);
}

export default ShowGraph;
