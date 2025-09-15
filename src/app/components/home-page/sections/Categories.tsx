import React from 'react';
import CategoryCard from '../../cards/CategoryCard';
import { SectionHeadingBold, SectionHeadingLight } from '../../SectionHeadings';
import { categories } from '@/data/mockData';
import { Category } from '@/types/types';

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
                {
                    categories.map((category: Category) => (
                        <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>
                    ))
                }
            </div>
        </section>
    )
}