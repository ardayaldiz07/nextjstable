import axios from 'axios';
import { useEffect, useState } from 'react';

// TABLE BASE
import WRAPPER from './wrapper';
import TABLE from './table';
import THEAD from './thead';
import TBODY from './tbody';
import TR from './tr';
import TH from './th';
import Base from './td-types/base';
import SplitField from './td-types/split-field';

// HELPERS
import DataByPath from './helpers/data-by-path';
import SEARCH from './helpers/search';
import CATEGORY from './helpers/category';
import SORTDATA from './helpers/sort';
import THSORT from './th-types/th-sort';
import Pagination from './pagination/pagination';



export default function NEXTTABLE(options) {
    const [data, setData] = useState([]);
    const [formattedData, setFormattedData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = options.itemPerPage; // Her sayfada göstereceğin item sayısı

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(options.api);
                const sortedData = SORTDATA(DataByPath(options.apiBasePath, response.data), 'newsId', 'asc');
                setData(response.data);
                setFilteredData(sortedData);
                setFormattedData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Sıralama fonksiyonu
    const handleSort = (field, order) => {
        const sortedData = SORTDATA(formattedData, field, order);
        setFilteredData(sortedData);
    };

    // Pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Veriyi sayfalara böl
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = options.pagination ? filteredData.slice(startIndex, startIndex + itemsPerPage) : filteredData;


    return (
        <WRAPPER>

            <div className='flex gap-5 justify-between items-center'>
                {
                    options.search.enabled && <SEARCH data={formattedData} searchFields={options.search.fields} change={setFilteredData} />
                }
                {
                    options.filter.enabled && <CATEGORY categories={options.filter.items} setCurrentPage={setCurrentPage} setFilteredData={setFilteredData} data={formattedData}/>
                }
            </div>

            <TABLE>
                <THEAD>
                    <TR>
                        {
                            options.columns.map((item, index) =>{
                                    switch(true){
                                        case (item.sort !== false && item.sort !== undefined):
                                            return(
                                                <THSORT children={item.text} column={item} onSort={handleSort} key={index}/>
                                            )
                                        default:
                                            return(
                                                <TH children={item.text} key={index}></TH>
                                            )
                                    }
                                }
                            )
                        }
                    </TR>
                </THEAD>
                <TBODY>
                {paginatedData.map((item, i) =>
                        <TR key={i}>
                            {options.columns.map((col, j) => {
                                switch (true) {
                                    case col.splitField !== undefined:
                                        return (
                                            <SplitField key={j} col={col} item={item} />
                                        );
                                    default:
                                        return (
                                            <Base key={j} col={col} item={item} />
                                        );
                                }
                            })}
                        </TR>
                    )}
                </TBODY>
            </TABLE>
            {
                options.pagination &&
                <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
            }

        </WRAPPER>
    );
}