import React from 'react';

function Card6({ name, img }) {
	return (
		<div className="rounded-2xl px-2 py-1 text-sm" style={{ backgroundColor: '#FFFFFF', width: '210px' }}>
			<div className="flex justify-between p-1">
				<p>{name}</p>
				<img src={img} className="w-5 h-5  rounded-md text-white" style={{ backgroundColor: '#5C9CE5' }} />
			</div>
			<h1 className="flex justify-center items-center text-md font-bold">42%</h1>
			<div className="p-2">
				<div className="flex justify-between text-xs gap-1">
					<p>0%</p>
					<p>25%</p>
					<p>50%</p>
					<p>75%</p>
					<p>100%</p>
				</div>
				<p className=" w-36 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
			</div>
		</div>
	);
}

export default Card6;
