"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, MessageCircle } from "lucide-react"
import { Product } from "@/types/types"

export default function ProductCard({
    product
}: {
    product: Product
}) {

    const { name, description, price, image, isInStock } = product

    return (
        <Card className="overflow-hidden shadow-md rounded-2xl">
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-foreground-light line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-primary font-bold">
                        <span className="text-2xl font-bold">৳</span>
                        &nbsp;{price}
                    </p>
                    {isInStock && (
                        <Badge className="bg-foreground text-white">
                            In Stock
                        </Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between gap-4 p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full flex items-center gap-2 text-foreground-light hover:text-foreground">
                    <Eye className="w-4 h-4" /> View Details
                </Button>
                <Button size="sm" className="w-full bg-whatsapp hover:bg-green-600 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
            </CardFooter>
        </Card>
    )
}
