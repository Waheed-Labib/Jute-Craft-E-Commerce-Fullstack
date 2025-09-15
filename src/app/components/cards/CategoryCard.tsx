"use client";

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { capitalizeFirstLetter } from 'js-utility-kingdom'
import { Category } from "@/types/types";

export default function CategoryCard({ category }: { category: Category }) {

    const { name, description, image } = category;

    return (
        <div className="rounded-xl border border-border/10 bg-card shadow-sm hover:shadow-md transition p-4 flex flex-col group">
            {/* Image */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{description}</p>

                {/* Button */}
                <Button
                    variant="outline"
                    className="mt-4 w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                >
                    <a href={`/category/${name.toLowerCase()}`}>
                        View {capitalizeFirstLetter(name)}
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </Button>
            </div>
        </div>
    )
}
