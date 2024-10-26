import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
    const menu = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'Explore', href: '/explore' },
        { id: 3, title: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
 
        <nav className="w-full top-0 left-0 py-2 border-b bg-white z-10 shadow-sm">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/gcare.png" alt="logo" width={150} height={98} />
                    </Link>
                    <div className="hidden sm:block">
                         <ul className="flex space-x-6">
                        {menu.map(item => (
                            <li className='font-medium hover:text-blue-400' key={item.id} >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                    </div>
                   
                    <Link href="#" className=' text-white bg-blue-500 p-2 rounded-xl hover:bg-blue-400'>
                    <p>Get started</p>
                    </Link>
                </div>
            </div>
        </nav>
        <div className="hidden">
                         <ul className="">
                        {menu.map(item => (
                            <li className='font-medium hover:text-blue-400' key={item.id} >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                    </div>
        </>
    );
};

export default Header;
