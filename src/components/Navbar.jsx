import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoImage from "../../public/assets/Wanderlast.png"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/myBookings">My Bookings</Link></li>
                <li><Link href="/admin">Admin</Link></li>
            </ul>
            <div>
                <Image src={LogoImage} alt="Logo" width={150} height={150} />
            </div>
            <div>
                
            </div>
        </nav>
    );
};

export default Navbar;