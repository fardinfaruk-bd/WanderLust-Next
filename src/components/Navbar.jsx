"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Person } from '@gravity-ui/icons';
import LogoImage from "../../public/assets/Wanderlast.png"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    console.log(user);
    const handleLogout = async () => {
        await authClient.signOut();
        window.location.reload();
    };
    return (
        <nav className='flex justify-between items-center p-5 bg-gray-100'>
            <ul className='flex gap-5'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
                <li><Link href="/add-destination">Add Destination</Link></li>
            </ul>
            <div>
                <Image src={LogoImage} alt="Logo" width={150} height={150} />
            </div>
            <ul className='flex gap-5 items-center'>
                <li><Link href="/profile" className='flex items-center gap-2' ><Person /> Profile</Link></li>
                <>
                    {isPending ? <span className="loading loading-spinner loading-xl"></span> :
                    user ? <>
                        <Avatar>
                            <Avatar.Image alt={user.name} src={user.image} />
                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        
                        
                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </> : <>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">Sign Up</Link></li>
                    </>
                    }
                </>
            </ul>
        </nav>
    );
};

export default Navbar;