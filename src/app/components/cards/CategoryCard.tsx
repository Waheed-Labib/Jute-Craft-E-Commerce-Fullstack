"use client";

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
    image: string
    title: string
    description: string
    buttonText: string
    href: string
}

export default function CategoryCard({
    image,
    title,
    description,
    buttonText,
    href,
}: CategoryCardProps) {
    return (
        <div className="rounded-xl border border-border/10 bg-card shadow-sm hover:shadow-md transition p-4 flex flex-col group">
            {/* Image */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{description}</p>

                {/* Button */}
                <Button
                    variant="outline"
                    className="mt-4 w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                >
                    <a href={href}>
                        {buttonText}
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </Button>
            </div>
        </div>
    )
}
