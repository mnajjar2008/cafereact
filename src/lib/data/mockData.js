import React from 'react';
import { PRODUCTS } from './products';

const mockData = PRODUCTS;
export const fetchProducts = filter => {
    if (filter) {
        return new Promise(resolve => setTimeout(() => resolve({ data: mockData.filter(item => item.category === filter) }), 1000));
    }
    return new Promise(resolve => setTimeout(() => resolve({ data: mockData }), 1000));
};
