"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { NavbarSearch } from "./search/NavbarSearch"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const categories = [
        { name: "Bags", href: "/bags" },
        { name: "Mats", href: "/mats" },
        { name: "Baskets", href: "/baskets" },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-foreground-light/10 w-full bg-background-nav">
            <div className="container flex items-center justify-between max-w-full p-4 md:px-8">
                {/* Logo + Tagline */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100 font-bold text-amber-800">
                        J
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-semibold text-lg text-gray-900">Jute Craft</span>
                        <span className="text-xs text-gray-500">Natural &amp; Sustainable</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8">
                    <Link
                        href="/"
                        className="relative text-sm font-medium text-primary after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-primary/80"
                    >
                        Home
                    </Link>
                    <Link href="/products" className="text-sm font-medium text-foreground-light hover:text-primary">
                        All Products
                    </Link>
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="text-sm font-medium text-foreground-light hover:text-primary"
                        >
                            {cat.name}
                        </Link>
                    ))}
                    <Link href="/about" className="text-sm font-medium text-foreground-light hover:text-primary">
                        About Us
                    </Link>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* Search Input */}
                    <div className="w-32 md:w-36 lg:w-48">
                        <NavbarSearch />
                    </div>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-6">
                            <nav className="flex flex-col gap-4">
                                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                                <Link href="/products" onClick={() => setOpen(false)}>All Products</Link>
                                {categories.map((cat) => (
                                    <Link key={cat.name} href={cat.href} onClick={() => setOpen(false)}>
                                        {cat.name}
                                    </Link>
                                ))}
                                <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>

                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
