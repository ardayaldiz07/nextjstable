import React, { useState, useEffect } from 'react';

export default function CATEGORY_FILTER({ categories, data, setFilteredData, setCurrentPage }) {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === '') {
            setFilteredData(data);
        } else {
            const filteredData = data.filter(item => {
                const categoryItems = item.category?.items || [];
                return categoryItems.some(cat => cat.name.toLowerCase() === category.toLowerCase());
            });
            setFilteredData(filteredData);
            setCurrentPage(1);
        }
    };

    return (
        <div>
            <select 
                value={selectedCategory} 
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="mb-2 border border-gray-600 p-2 rounded-lg bg-gray-700 text-white"
            >
                <option value="">Tüm Kategoriler</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
