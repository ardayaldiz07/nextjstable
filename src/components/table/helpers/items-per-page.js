export default function ItemsPerPage({pageOptions, setItemsPerPage}){
    const handleItemsPerPageChange = (event) =>{
        setItemsPerPage(Number(event.target.value));
    }
    return(
        <div>
            <select onChange={handleItemsPerPageChange} className="bg-gray-900 h-20vh rounded-lg shadow-lg text-white mb-2">
                {pageOptions.map((item,index) => 
                    <option key={index} value={item.value}>{item.text}</option>
                )}
            </select>
        </div>
    )
}