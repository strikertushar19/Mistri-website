"use client";

import { Button, buttonVariants } from "./ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetOverlay
} from "./ui/sheet";
import { cn } from "../lib/utils";
import { NAV_LINKS } from "../lib/nav-links";
import { Menu, X, ZapIcon, Clock, Gift } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Announcement Banner */}
            <div className="lg:hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-2 px-3 text-center text-xs font-medium relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="relative z-10 flex items-center justify-center gap-1 flex-wrap">
                    <Clock className="w-3 h-3" />
                    <span>🎉 24h: Join waitlist & get</span>
                    <Gift className="w-3 h-3" />
                    <span className="font-bold">1 MONTH FREE!</span>
                    <Link 
                        href="/waitlist" 
                        className="ml-1 bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-0.5"
                    >
                        Join
                        <ZapIcon className="w-2.5 h-2.5" />
                    </Link>
                </div>
            </div>

            <div className="flex lg:hidden items-center justify-end border-b border-neutral-800 shadow-2xl">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetOverlay className="z-[99998] bg-black/50" />
                    <SheetContent className="w-screen bg-white z-[99999]">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <SheetClose asChild className="absolute top-3 right-5 bg-white z-[99999] flex items-center justify-center">
                            <Button size="icon" variant="ghost" className="text-gray-600 hover:text-white ">
                                <X className="w-6 h-6" />
                            </Button>
                        </SheetClose>
                        <div className="flex flex-col items-start w-full py-2 mt-10">
                            <div className="flex items-center justify-evenly w-full space-x-2">
                                <Link href="/waitlist" className={buttonVariants({ className: "w-full border-gray-300 text-gray-700 hover:bg-white font-bold" })}>
                                    Join Waitlist
                                </Link>
                                <Link href="/waitlist" className={buttonVariants({ className: "w-full bg-blue-600 text-black hover:bg-blue-700" })}>
                                    Get Started
                                    <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
                                </Link>
                            </div>
                            <ul className="flex flex-col items-start w-full mt-6">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.title} className="w-full">
                                        <Link
                                            href={link.href}
                                            onClick={handleClose}
                                            className="flex items-center w-full py-4 font-medium text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-100"
                                        >
                                            <span>{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
};

export default MobileNavbar 