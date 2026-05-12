import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Person} from '@gravity-ui/icons';
import LogoImage from "../../public/assets/Wanderlast.png"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-gray-100'>
            <ul className='flex gap-5'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
                <li><Link href="/admin">Admin</Link></li>
            </ul>
            <div>
                <Image src={LogoImage} alt="Logo" width={150} height={150} />
            </div>
            <ul className='flex gap-5'>
                <li><Link href="/profile" className='flex items-center gap-2' ><Person /> Profile</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;