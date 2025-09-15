import { Button } from "@/components/ui/button"
import ProductCard from "../../cards/ProductCard"
import { SectionHeadingBold, SectionHeadingLight } from "../../SectionHeadings"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/mockData"

export default function FeaturedProducts() {

    const featuredProducts = products.filter(product => product.isFeatured);

    return (
        <section className="p-8 md:p-16">
            <div className="text-center mb-10">
                <SectionHeadingBold>Featured Products</SectionHeadingBold>
                <SectionHeadingLight>
                    Handpicked selection of our most popular jute products
                </SectionHeadingLight>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
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
