import React from 'react';

function Card1({ name, img }) {
	return (
		<div className="rounded-2xl px-2 py-1 text-sm" style={{ backgroundColor: '#FFFFFF', width: '210px' }}>
			<div className="flex justify-between p-1">
				<p>{name}</p>
				<img src={img} className="w-5 h-5  rounded-md text-white" style={{ backgroundColor: '#5C9CE5' }} />
			</div>
			<h1 className="flex justify-center items-center">
				<span className="text-md font-bold pr-1">82%</span>bad
			</h1>
			<div className="flex justify-center gap-3 p-1">
				<div className="py-1 text-xs">
					<p>good</p>
					<p className=" w-10 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
				</div>
				<div className="py-1 text-xs">
					<p>normal</p>
					<p className=" w-9 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
				</div>
				<div className="py-1 text-xs">
					<p>bad</p>
					<p className=" w-10 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
			</div>
		</div>
	);
}

export default Card1;
