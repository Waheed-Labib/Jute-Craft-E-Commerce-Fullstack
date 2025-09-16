import { Card, CardContent } from '@/components/ui/card';
import { Feature } from '@/types/types';
import React from 'react';
import * as LucideIcons from "lucide-react"

const FeatureCard = ({ feature }: {
    feature: Feature;
}) => (
    (() => {
        const { icon, title, description } = feature;
        const Icon = ((LucideIcons as unknown) as Record<string, React.ElementType>)[icon]; // get icon dynamically
        return (
            <Card
                className="border rounded-xl shadow-sm hover:shadow-md transition w-full"
            >
                <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 rounded-full p-3 mb-4">
                        {Icon ? (
                            <Icon className="h-8 w-8 text-primary" />
                        ) : (
                            <span className="text-primary text-3xl">J</span>
                        )}
                    </div>
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </CardContent>
            </Card>
        );
    })()
);

export default FeatureCard;