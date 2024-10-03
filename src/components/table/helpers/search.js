import { useState } from 'react';

export default function SEARCH({ data, change, searchFields, setCurrentPage }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        const filteredData = data.filter(item => {
            return searchFields.some(field => {
                const fieldValue = field.split('.').reduce((acc, curr) => acc && acc[curr], item); 
                return String(fieldValue).toLowerCase().includes(value.toLowerCase());
            });
        });

        change(filteredData);  
        setCurrentPage(1);      
    };

    return (
        <div className=''>
            <input
                className='mb-2 border border-gray-600 p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500'
                type="search"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={"Search: "+searchFields.map(item => 
                    item
                )}
            />
        </div>
    );
}