"use client";

import { buttonVariants } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";
import { NAV_LINKS } from "../lib/nav-links";
import { ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from "./max-width-wrapper";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 8) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "sticky flex items-center justify-center top-0 inset-x-0 h-14 w-full z-[99999] select-none transition-all duration-300",
            "bg-black",
            "border-b border-neutral-800 shadow-2xl"
        )}>
           
                <MaxWidthWrapper className="flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link href="/#home">
                            <span className="text-lg font-bold font-heading !leading-none text-white">
                                Mistri
                            </span>
                        </Link>

                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList className="space-x-1">
                                {NAV_LINKS.map((link) => (
                                    <NavigationMenuItem key={link.title}>
                                        <NavigationMenuLink asChild>
                                            <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium">
                                                {link.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                    </div>

                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center gap-x-4">
                            <Link href="#waitlist" className="text-neutral-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium">
                                Join Waitlist
                            </Link>
                            <Link href="#waitlist" className="bg-white text-black hover:bg-neutral-100 transition-colors duration-200 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1.5">
                                Get Started
                                <ZapIcon className="size-3.5 text-orange-500 fill-orange-500" />
                            </Link>
                        </div>
                    </div>

                    <MobileNavbar />

                </MaxWidthWrapper>
           
        </header>
    )
};

export default Navbar 