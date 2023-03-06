import React from 'react';

function Card4({ name, img }) {
	return (
		<div className="rounded-2xl px-2 py-1 text-sm" style={{ backgroundColor: '#FFFFFF', width: '210px' }}>
			<div className="flex justify-between p-1">
				<p>{name}</p>
				<img src={img} className="w-5 h-5  rounded-md text-white" style={{ backgroundColor: '#5C9CE5' }} />
			</div>
			<h1 className="flex justify-center items-center">
				<span className="text-md font-bold pr-1">4</span> medium
			</h1>
			<div className="flex justify-center gap-2 pt-2 pb-1">
				<div className="text-xs">
					<p>0-2</p>
					<p className="w-4 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>3-5</p>
					<p className=" w-4 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>6-7</p>
					<p className=" w-4 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>8-10</p>
					<p className=" w-4 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>11+</p>
					<p className=" w-4 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
			</div>
		</div>
	);
}

export default Card4;
