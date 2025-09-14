"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
    return (
        <section className="bg-primary-background">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
                {/* Left Content */}
                <div className="space-y-6">
                    <Badge className="">
                        100% Natural & Eco-Friendly
                    </Badge>
                    <h1
                        className={`text-4xl sm:text-5xl font-[var(--font-poppins)] text-foreground`}
                    >
                        Sustainable Living with{" "}
                        <span className="text-primary">Jute Craft</span>
                    </h1>
                    <p className="text-foreground-light">
                        Discover our collection of handcrafted jute products that combine
                        traditional craftsmanship with modern design for sustainable living.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="bg-primary text-primary-foreground">
                            Shop Now
                        </Button>
                        <Button size="lg" variant="outline" className="bg-background text-foreground-light hover:text-foreground">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/hero.png" // replace with actual path inside public/
                            alt="Eco-friendly Jute Bag"
                            width={500}
                            height={400}
                            className="object-cover"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-4 right-4">
                        <Badge
                            variant="outline"
                            className="bg-white shadow flex items-center gap-2 text-green-600"
                        >
                            <span className="text-green-600">🌿</span> Eco-Friendly
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    )
}
