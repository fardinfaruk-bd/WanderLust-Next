
import Image from 'next/image';
import { MapPin } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';
import { SlCalender } from 'react-icons/sl';
import { MdArrowOutward } from 'react-icons/md';

const DestinationCard = ({ destination }) => {
    return (
        <div >
            <Image src={destination.imageUrl} alt={destination.destinationName} width={400} height={400} className='w-full h-60 object-cover' />
            <div className='p-2'>
                <div className='flex items-center gap-1 text-[#6c696d]'>
                    <MapPin /> <span>{destination.country}</span>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-2xl'>{destination.destinationName}</h2>
                    <h2 className='text-[#6c696d]'><span className='text-black text-2xl'>${destination.price}</span>/Person</h2>
                </div>
                <div className='flex gap-2 items-center'>
                    <SlCalender /> <span>{destination.duration}</span>
                </div>
                <div>
                    <Link href={`/destinations/${destination._id}`} className='flex items-center gap-2 mt-2 text-blue-500'>Book Now <MdArrowOutward /></Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;