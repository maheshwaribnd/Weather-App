import React from 'react';

function Card3({ name, img }) {
	return (
		<div className="rounded-2xl px-2 py-1 text-sm" style={{ backgroundColor: '#FFFFFF', width: '210px' }}>
			<div className="flex justify-between p-1">
				<p>{name}</p>
				<img src={img} className="w-5 h-5  rounded-md text-white" style={{ backgroundColor: '#5C9CE5' }} />
			</div>
			<h1 className="flex justify-center items-center">
				<span className="text-md font-bold pr-1">1.4</span>cm
			</h1>
			<div className="flex justify-center gap-1 p-2">
				<div className="text-xs">
					<p>0</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>10</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#5C9CE5', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>20</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>30</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>40</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>50</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>60</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				<div className="text-xs">
					<p>70</p>
					<p className=" w-3 rounded-3xl" style={{ backgroundColor: '#DCDCDC', height: '8px' }} />
				</div>
				{/* <div className='text-xs'>
                    <p>80</p>
                    <p className=' w-3 rounded-3xl' style={{ backgroundColor: '#DCDCDC', height: '8px' }}></p>
                </div> */}
				{/* <div className='text-xs'>
                    <p>90</p>
                    <p className=' w-2 rounded-3xl' style={{ backgroundColor: '#DCDCDC', height: '8px' }}></p>
                </div> */}
			</div>
		</div>
	);
}

export default Card3;
