'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full flex flex-row relative items-center overflow-hidden">
            <div className="h-[128px] px-20 flex justify-center items-center">
                <Link href="./" className='text-5xl'>
                    KCG
                </Link>
            </div>
            <div className="absolute inset-x-0 top-0 h-[128px] flex justify-center items-center gap-x-[60px]">
                <Link href="./about">
                    About
                </Link>
                <Link href="./members">
                    Members
                </Link>
                <Link href="./games">
                    Games
                </Link>
                <Link href="./rules">
                    Rules
                </Link>
            </div>
            <div className="absolute top-0 right-0 px-20 h-[128px] flex justify-center items-center gap-[30px]">
                <Link href="./login">
                    Login
                </Link>
                <Link href="./register">
                    <div className="px-8 py-3 border-3 rounded-full">Register</div>
                </Link>
            </div>
        </header>
    );
}