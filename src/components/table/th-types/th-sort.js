import { useState } from "react";
import TH from "../th";

export default function THSORT({children,column, onSort}){

    const [sortOrder, setSortOrder] = useState('asc'); // Varsayılan sıralama düzeni
    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; // Sıralama düzenini değiştir
        setSortOrder(newSortOrder);
        onSort(column.field, newSortOrder); // Sıralama fonksiyonunu çağır
    
    };


    return(
        // <th className="border border-gray-600 px-4 py-3 text-left text-sm">

        // </th>

        <TH>
            <div className="flex items-center"  onClick={handleSort}>
                {children}
                {
                    <span className="ml-1 cursor-pointer w-full flex justify-end">
                        {sortOrder === 'asc' ? '↓' : '↑'}
                    </span>
                }
            </div>
        </TH>
    )
}