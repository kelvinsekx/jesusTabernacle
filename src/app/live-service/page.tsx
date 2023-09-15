'use client'
import * as React from 'react'
import { Header } from '@/components/Header/header'
import {Container} from '@/components/container'


const LiveService = ()=> {
    const [timeRemaining, setTimeRemaining] = React.useState(calculateTimeUntilNextSunday());
    function calculateTimeUntilNextSunday() {
        const now = new Date();
        const daysUntilSunday = 7 - now.getDay();
        const hoursUntilSunday = 23 - now.getHours();
        const minutesUntilSunday = 59 - now.getMinutes();
        const secondsUntilSunday = 59 - now.getSeconds();
    
        return {
          days: daysUntilSunday,
          hours: hoursUntilSunday,
          minutes: minutesUntilSunday,
          seconds: secondsUntilSunday,
        };
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining(calculateTimeUntilNextSunday());
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    return <Container pad>
        <div className='flex flex-col md:items-center'>
            <Header className='max-md:w-[80%]'>Jesus Tabernacle Live Broadcast</Header>
                <div className='w-full md:w-[60%] h-[20rem] lg:h-[37.5rem] flex justify-center items-center bg-gradient-to-br from-green-500 to-indigo-800 rounded-md text-6xl md:text-9xl text-white'>
                    <div className='border-8 border-yellow-800 shadow-2xl font-mono grid grid-cols-4 gap-x-px'>
                        <div className='bg-black p-4 relative'>
                            <div className="absolute inset-0  grid grid-rows-2">
                                <div className='bg-gradient-to-br from-gray-800 to-gray-900'></div>
                                <div className='bg-gradient-to-br from-gray-800 to-gray-700'></div>
                            </div>
                            <div className='relative flex flex-col gap-2 items-center'>
                                <span >{timeRemaining.days}</span>
                                <span className='text-xs'>Days</span>
                            </div>
                            <div className="absolute inset-0 flex items-center">
                                <div className="h-px w-full bg-black"></div>
                            </div>
                        </div>
                        <div className='bg-black p-4 relative'>
                            <div className="absolute inset-0  grid grid-rows-2">
                                <div className='bg-gradient-to-br from-gray-800 to-gray-900'></div>
                                <div className='bg-gradient-to-br from-gray-800 to-gray-700'></div>
                            </div>
                            <div className='relative flex flex-col gap-2 items-center'>
                                <span >1{timeRemaining.hours}</span>
                                <span className='text-xs'>hrs</span>
                            </div>
                            <div className="absolute inset-0 flex items-center">
                                <div className="h-px w-full bg-black"></div>
                            </div>
                        </div>
                        <div className='bg-black p-4 relative'>
                            <div className="absolute inset-0  grid grid-rows-2">
                                <div className='bg-gradient-to-br from-gray-800 to-gray-900'></div>
                                <div className='bg-gradient-to-br from-gray-800 to-gray-700'></div>
                            </div>
                            <div className='relative flex flex-col gap-2 items-center'>
                                <span >{timeRemaining.minutes}</span>
                                <span className='text-xs'>mins</span>
                            </div>
                            <div className="absolute inset-0 flex items-center">
                                <div className="h-px w-full bg-black"></div>
                            </div>
                        </div>
                        <div className='bg-black p-4 relative'>
                            <div className="absolute inset-0  grid grid-rows-2">
                                <div className='bg-gradient-to-br from-gray-800 to-gray-900'></div>
                                <div className='bg-gradient-to-br from-gray-800 to-gray-700'></div>
                            </div>
                            <div className='relative flex flex-col gap-2 items-center'>
                                <span >{timeRemaining.seconds}</span>
                                <span className='text-xs'>sec</span>
                            </div>
                            <div className="absolute inset-0 flex items-center">
                                <div className="h-px w-full bg-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </Container>
}

export default  LiveService