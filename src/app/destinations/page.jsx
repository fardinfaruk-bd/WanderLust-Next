import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destinations');
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className='mt-20'>
            <div className='mb-20'>
                <h1 className='font-bold text-6xl'>Explore All Destinations</h1>
                <p className='text-[#6c696d] text-xl'>Find your perfect travel experience from our curated collection</p>
            </div>
            <div className='grid grid-cols-4 gap-5 mb-20'>
                {
                    destinations.map((destination) => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>

    );
};

export default DestinationsPage;