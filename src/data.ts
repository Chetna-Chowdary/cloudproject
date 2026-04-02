import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro M3',
    description: 'The most advanced chips ever built for a personal computer.',
    price: 165917,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    reviews: 128,
    specs: ['Apple M3 Chip', '16GB Unified Memory', '512GB SSD Storage', '14.2-inch Liquid Retina XDR display']
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Titanium. So strong. So light. So Pro.',
    price: 82917,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000&auto=format&fit=crop',
    rating: 4.8,
    reviews: 256,
    specs: ['A17 Pro chip', 'Titanium design', '48MP Main camera', '6.1-inch Super Retina XDR display']
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation with magnificent sound.',
    price: 28967,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    rating: 4.7,
    reviews: 89,
    specs: ['Industry-leading noise cancellation', '30-hour battery life', 'Crystal-clear hands-free calling', 'Multipoint connection']
  },
  {
    id: '4',
    name: 'iPad Pro 12.9"',
    description: 'A brilliant Liquid Retina XDR display and blazing-fast M2 chip.',
    price: 91217,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    reviews: 64,
    specs: ['Apple M2 chip', '12.9-inch Liquid Retina XDR display', '12MP Wide and 10MP Ultra Wide cameras', 'Face ID']
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'The ultimate smartphone experience with S Pen support.',
    price: 107817,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop',
    rating: 4.7,
    reviews: 142,
    specs: ['Snapdragon 8 Gen 3', '200MP Camera', 'Built-in S Pen', '6.8-inch Dynamic AMOLED 2X']
  },
  {
    id: '6',
    name: 'Dell XPS 15',
    description: 'Power your passions with a stunning 4K OLED display.',
    price: 149317,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop',
    rating: 4.6,
    reviews: 75,
    specs: ['13th Gen Intel Core i7', '16GB DDR5 RAM', '512GB SSD', '15.6-inch FHD+ display']
  },
  {
    id: '7',
    name: 'AirPods Max',
    description: 'A perfect balance of exhilarating high-fidelity audio.',
    price: 45567,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop',
    rating: 4.5,
    reviews: 210,
    specs: ['Active Noise Cancellation', 'Transparency mode', 'Spatial audio', '20 hours of listening time']
  },
  {
    id: '8',
    name: 'Logitech MX Master 3S',
    description: 'An iconic mouse remastered for ultimate precision.',
    price: 8217,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    reviews: 320,
    specs: ['8K DPI tracking', 'Quiet Clicks', 'MagSpeed scrolling', 'USB-C quick charging']
  }
];
