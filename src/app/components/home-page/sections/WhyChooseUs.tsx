"use client"

import { features } from "@/data/mockData"
import { SectionHeadingBold, SectionHeadingLight } from "../../SectionHeadings"
import FeatureCard from "../../cards/FeatureCard"

export default function WhyChooseUs() {
    return (
        <section className="p-8 md:p-16 bg-background text-center">

            <SectionHeadingBold>Why Choose Us?</SectionHeadingBold>

            <SectionHeadingLight>
                We&apos;re committed to quality, sustainability, and customer satisfaction
            </SectionHeadingLight>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
            </div>

        </section>
    )
}
