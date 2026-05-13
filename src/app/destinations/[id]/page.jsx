import UpdateModal from '@/components/UpdateModal';
import { getDestinationById } from '@/lib/data';
import { Calendar, MapPin, StarFill, TrashBin } from '@gravity-ui/icons';

import { Button} from "@heroui/react";
import Image from 'next/image';
import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params
    console.log(id);

    const destination = await getDestinationById(id);

    return (
        <div className='my-10 container mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-xl flex gap-2 items-center'>
                    <BiLeftArrow /> <span>Back to Destinations</span>
                </div>
                <div className='flex gap-2'>
                    <UpdateModal destination={destination}/>
                    <Button><TrashBin /> Delete</Button>
                </div>
            </div>
            <div className='space-y-10'>
                <div className='mt-10'>
                    <Image src={destination.imageUrl} alt={destination.destinationName} width={600} height={900} className='w-full object-cover h-100' />
                </div>
                <div className='border-b border-gray-200'></div>
                <div className="flex justify-between gap-10">
                    <div className='space-y-5'>
                        <p className='flex items-center text-[#6c696d]'><MapPin /> {destination.country}</p>
                        <h1 className='text-6xl'>{destination.destinationName}</h1>
                        <div className='flex items-center gap-2 text-[#6c696d]'>
                            <StarFill color='green' />
                            <p>4.9</p>
                            <Calendar />
                            <p>{destination.duration}</p>
                        </div>
                        <div>
                            <h2 className='text-3xl'>Overview</h2>
                            <p className='text-[#6c696d]'>{destination.description}</p>
                        </div>
                    </div>
                    <div className='space-y-5 p-5 border border-gray-200 shadow-md min-w-100'>
                        <div>
                            <p className='text-[#6c696d]'>starting from</p>
                            <p className='text-[#15a1bf] text-2xl'>${destination.price}</p>
                            <p className='text-[#6c696d]'>per person</p>
                        </div>
                        <div className='bg-gray-100 p-2'>
                            <p>{destination.departureDate}</p>
                        </div>
                        <div>
                            <Button className="bg-[#15a1bf] rounded-none text-white w-full">Book Now</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default DestinationDetailsPage;