import { Product, Category, ContactInfo } from '@/types/types';

export const categories: Category[] = [
    {
        _id: 'bags',
        name: 'Bags',
        image: 'https://images.unsplash.com/photo-1650373773073-a8920f3edf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwYmFncyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Eco-friendly jute bags for everyday use',
        createdAt: new Date('2025-01-02T10:00:00Z'),
        updatedAt: new Date('2025-01-02T10:00:00Z')
    },
    {
        _id: 'mats',
        name: 'Mats',
        image: 'https://images.unsplash.com/photo-1684682025585-1d77e17ec2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwbWF0cyUyMGVjb3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Natural fiber mats and rugs',
        createdAt: new Date('2025-01-02T10:00:00Z'),
        updatedAt: new Date('2025-01-02T10:00:00Z')
    },
    {
        _id: 'baskets',
        name: 'Baskets',
        image: 'https://images.unsplash.com/photo-1737740068972-d3457e694bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldHMlMjBuYXR1cmFsfGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Handwoven baskets for storage and decor',
        createdAt: new Date('2025-01-02T10:00:00Z'),
        updatedAt: new Date('2025-01-02T10:00:00Z')
    }
];

export const products: Product[] = [
    // Bags (Most recent)
    {
        _id: 'bag-1',
        name: 'Eco Shopping Bag',
        price: 250,
        description: 'Durable jute shopping bag perfect for groceries and daily use. Made from 100% natural jute fiber.',
        image: 'https://images.unsplash.com/photo-1650373773073-a8920f3edf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwYmFncyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'bags',
        isInStock: true,
        isFeatured: true,
        createdAt: new Date('2025-01-02T10:00:00Z'),
        updatedAt: new Date('2025-01-02T10:00:00Z')
    },
    {
        _id: 'basket-3',
        name: 'Laundry Basket',
        price: 600,
        description: 'Large capacity laundry basket with handles.',
        image: 'https://images.unsplash.com/photo-1737740068972-d3457e694bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldHMlMjBuYXR1cmFsfGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'baskets',
        isInStock: true,
        isFeatured: true,
        createdAt: new Date('2025-01-02T10:00:00Z'),
        updatedAt: new Date('2025-01-02T10:00:00Z')
    },
    {
        _id: 'mat-1',
        name: 'Natural Jute Mat',
        price: 450,
        description: 'Handwoven jute mat perfect for entryways and living spaces.',
        image: 'https://images.unsplash.com/photo-1684682025585-1d77e17ec2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwbWF0cyUyMGVjb3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'mats',
        isInStock: true,
        isFeatured: true,
        createdAt: new Date('2025-01-02T10:00:00Z'),
        updatedAt: new Date('2025-01-02T10:00:00Z')
    },
    {
        _id: 'bag-2',
        name: 'Jute Tote Bag',
        price: 300,
        description: 'Stylish tote bag made from premium jute with comfortable handles.',
        image: 'https://images.unsplash.com/photo-1720264858026-df4b8b4012c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'bags',
        isInStock: true,
        isFeatured: false,
        createdAt: new Date('2024-12-28T14:30:00Z'),
        updatedAt: new Date('2024-12-28T14:30:00Z')
    },
    {
        _id: 'basket-1',
        name: 'Storage Basket',
        price: 550,
        description: 'Large storage basket perfect for organizing your home.',
        image: 'https://images.unsplash.com/photo-1737740068972-d3457e694bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldHMlMjBuYXR1cmFsfGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'baskets',
        isInStock: true,
        isFeatured: false,
        createdAt: new Date('2024-12-25T09:15:00Z'),
        updatedAt: new Date('2024-12-25T09:15:00Z')
    },
    {
        _id: 'mat-2',
        name: 'Eco Floor Mat',
        price: 350,
        description: 'Durable floor mat made from natural jute fibers.',
        image: 'https://images.unsplash.com/photo-1720264858026-df4b8b4012c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'mats',
        isInStock: true,
        isFeatured: true,
        createdAt: new Date('2024-12-22T11:00:00Z'),
        updatedAt: new Date('2024-12-22T11:00:00Z')
    },
    {
        _id: 'basket-2',
        name: 'Decorative Basket',
        price: 400,
        description: 'Beautiful decorative basket for home styling.',
        image: 'https://images.unsplash.com/photo-1720264858026-df4b8b4012c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'baskets',
        isInStock: false,
        isFeatured: false,
        createdAt: new Date('2024-12-20T16:30:00Z'),
        updatedAt: new Date('2024-12-20T16:30:00Z')
    },
    {
        _id: 'bag-3',
        name: 'Market Carry Bag',
        price: 200,
        description: 'Strong and lightweight bag ideal for market trips and shopping.',
        image: 'https://images.unsplash.com/photo-1650373773073-a8920f3edf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwYmFncyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc1Njg5NTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'bags',
        isInStock: true,
        isFeatured: true,
        createdAt: new Date('2024-12-18T13:20:00Z'),
        updatedAt: new Date('2024-12-18T13:20:00Z')
    },
    {
        _id: 'mat-3',
        name: 'Entrance Mat',
        price: 400,
        description: 'Weather-resistant entrance mat with natural texture.',
        image: 'https://images.unsplash.com/photo-1684682025585-1d77e17ec2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwbWF0cyUyMGVjb3xlbnwxfHx8fDE3NTY4OTU3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'mats',
        isInStock: true,
        isFeatured: true,
        createdAt: new Date('2024-12-15T08:45:00Z'),
        updatedAt: new Date('2024-12-15T08:45:00Z')
    }
];

export const contactInfo: ContactInfo = {
    phone: '+1-555-0123',
    whatsapp: '+1-555-0123',
    email: 'info@jutecraft.com',
    address: '123 Eco Street, Green City, GC 12345'
};

export const companyInfo = {
    name: 'Jute Craft',
    tagline: 'Sustainable Living, Natural Style',
    about: 'Jute Craft is dedicated to creating beautiful, sustainable products from natural jute fiber. Our handcrafted items combine traditional techniques with modern design to bring you eco-friendly solutions for everyday living.',
    whyChooseUs: [
        {
            title: '100% Natural',
            description: 'All our products are made from pure, natural jute fiber with no harmful chemicals.'
        },
        {
            title: 'Handcrafted Quality',
            description: 'Each item is carefully handwoven by skilled artisans ensuring unique quality.'
        },
        {
            title: 'Eco-Friendly',
            description: 'Biodegradable and sustainable materials that help protect our environment.'
        },
        {
            title: 'Durable & Long-lasting',
            description: 'Strong natural fibers ensure our products withstand daily use for years.'
        }
    ]
};