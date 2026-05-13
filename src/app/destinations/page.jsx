import DestinationCard from '@/components/DestinationCard';
import { getDestinations } from '@/lib/data';
import React from 'react';

const DestinationsPage = async () => {
    const destinations = await getDestinations();
    return (
        <div className='mt-20 max-w-7xl mx-auto'>
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