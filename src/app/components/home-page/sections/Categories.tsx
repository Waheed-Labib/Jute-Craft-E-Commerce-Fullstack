import React from 'react';
import CategoryCard from '../../cards/CategoryCard';
import { SectionHeadingBold, SectionHeadingLight } from '../../SectionHeadings';

export default function Categories() {

    

    return (
        <section className="mx-auto p-8 md:p-16 mt-12">
            {/* Heading */}
            <div className="text-center">
                <SectionHeadingBold>
                    Our Product Categories
                </SectionHeadingBold>

                <SectionHeadingLight>
                    Explore our carefully curated collection of natural jute products
                </SectionHeadingLight>
            </div>

            {/* Cards */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <CategoryCard
                    image="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Bags"
                    description="Eco-friendly jute bags for everyday use"
                    buttonText="View Bags"
                    href="/bags"
                />
                <CategoryCard
                    image="https://images.unsplash.com/photo-1745905308908-25f35bacd146?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Mats"
                    description="Natural fiber mats and rugs"
                    buttonText="View Mats"
                    href="/mats"
                />
                <CategoryCard
                    image="https://images.unsplash.com/photo-1455669175216-9017c9b02fc6?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Baskets"
                    description="Handwoven baskets for storage and decor"
                    buttonText="View Baskets"
                    href="/baskets"
                />
            </div>
        </section>
    )
}