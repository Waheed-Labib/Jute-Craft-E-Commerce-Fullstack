import React from 'react';

export const SectionHeadingBold = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <h2 className="text-3xl font-semibold text-foreground">
            {children}
        </h2>
    );
};

export const SectionHeadingLight = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <p className="text-foreground-light mt-2">
            {children}
        </p>
    );
};
