import React from 'react'
import WeatherCard from './Weather'
import gif from '../Components/GIF/sunny.gif'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Switch from '@mui/material/Switch';
// import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


function WrapComponent() {
    return (
        <div className='flex justify-center m-1 font-serif' style={{ height: '700px', }}>
            <div className="left w-60 ml-6 pl-3 pr-8 py-6 rounded-l-3xl text-white" style={{ backgroundColor: '#5C9CE5', boxShadow: '4px 4px 30px #B0D2F8' }}>
                <div className='flex justify-between items-center px-1 pb-5'>
                    <AddRoundedIcon className='w-4 h-4 rounded-md' style={{ backgroundColor: '#FFFFFF', color: '#5C9CE5' }} />
                    <div className='flex justify-between items-center text-center gap-1 font-bold'>
                        {/* <RemoveRoundedIcon/> */}
                        <p className='text-5xl pb-1'>-</p>
                        <p className='text-xs text-gray-300'>o</p>
                        <p className='text-xs text-gray-300'>o</p>
                        {/* <FiberManualRecordOutlinedIcon/> */}
                    </div>
                    <div className='flex items-center text-xs font-semibold'>
                        <p>°C</p>
                        <Switch />
                        <p>°F</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h1 className='text-sm'><NearMeOutlinedIcon />New York, USA</h1>
                        <p className='text-xs'>Today 28 Sept</p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src="https://img.icons8.com/pulsar-line/48/000000/sunrise.png" className='w-3 h-3' />
                            <h1>07.19</h1>
                        </div>
                        <div className='flex items-center'>
                            <img src="https://img.icons8.com/sf-regular/48/000000/sunset.png" className='w-3 h-3' />
                            <h1>19.32</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center pt-7'>
                    <ArrowBackIosRoundedIcon className='text-slate-200' />
                    <h1 className='text-7xl'>27°</h1>
                    <ArrowForwardIosRoundedIcon className='text-slate-200' />
                </div>
                <div className='flex justify-center pt-4 gap-3'>
                    <WbSunnyOutlinedIcon />
                    <h3 className='font-semibold'>Sunny</h3>
                </div>

                <div className='mt-16 flex justify-center items-center'>
                    <img src={gif} alt="" className='rounded-3xl w-40' />
                </div>
            </div>
            <div className="right">
                <WeatherCard />
            </div>
        </div>
    )
}

export default WrapComponent
