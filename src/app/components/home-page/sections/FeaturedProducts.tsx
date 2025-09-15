import { Button } from "@/components/ui/button"
import ProductCard from "../../cards/ProductCard"
import { SectionHeadingBold, SectionHeadingLight } from "../../SectionHeadings"
import { ArrowRight } from "lucide-react"

const products = [
    {
        image: "https://images.unsplash.com/photo-1650373773073-a8920f3edf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwYmFncyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Eco Shopping Bag",
        description: "Durable jute shopping bag perfect for groceries and daily use. Made from 100% natural jute fiber.",
        price: "$25",
    },
    {
        image: "https://images.unsplash.com/photo-1737740068972-d3457e694bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldHMlMjBuYXR1cmFsfGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Laundry Basket",
        description: "Large capacity laundry basket with handles.",
        price: "$60",
    },
    {
        image: "https://images.unsplash.com/photo-1684682025585-1d77e17ec2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwbWF0cyUyMGVjb3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Natural Jute Mat",
        description: "Handwoven jute mat perfect for entryways and living spaces.",
        price: "$45",
    },
    {
        image: "https://images.unsplash.com/photo-1720264858026-df4b8b4012c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Handmade Jute Rug",
        description: "Beautifully crafted jute rug for eco-friendly home decor.",
        price: "$80",
    },
    {
        image: "https://images.unsplash.com/photo-1737740068972-d3457e694bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldHMlMjBuYXR1cmFsfGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Jute Wall Hanging",
        description: "Artistic wall hanging made from natural jute.",
        price: "$40",
    },
    {
        image: "https://images.unsplash.com/photo-1720264858026-df4b8b4012c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Jute Bottle Holder",
        description: "Eco-friendly jute holder for bottles and jars.",
        price: "$20",
    },
]

export default function FeaturedProducts() {
    return (
        <section className="p-8 md:p-16">
            <div className="text-center mb-10">
                <SectionHeadingBold>Featured Products</SectionHeadingBold>
                <SectionHeadingLight>
                    Handpicked selection of our most popular jute products
                </SectionHeadingLight>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 bg-white text-foreground-light hover:text-foreground"
                >
                    View All Products <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </section>
    )
}
