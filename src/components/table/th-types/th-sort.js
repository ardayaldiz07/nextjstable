import { useState } from "react";
import TH from "../th";

export default function THSORT({children,column, onSort}){

    const [sortOrder, setSortOrder] = useState('asc');
    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        onSort(column.field, newSortOrder); // Sıralama fonksiyonunu çağır
    
    };


    return(
        <TH>
            <div className="flex items-center"  >
                {children}
                {
                    <span onClick={handleSort} className="ml-1 cursor-pointer w-full flex justify-end">
                        {sortOrder === 'asc' ? '↓' : '↑'}
                    </span>
                }
            </div>
        </TH>
    )
}