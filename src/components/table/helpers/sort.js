import DataByPath from "./data-by-path";

const SORTDATA = (data, field, order) => {
    return [...data].sort((a, b) => {
        const aValue = DataByPath(field, a);
        const bValue = DataByPath(field, b);

        if (order === 'asc') {
            return aValue > bValue ? 1 : -1; // Artan sıralama
        } else {
            return aValue < bValue ? 1 : -1; // Azalan sıralama
        }
    });
};

export default SORTDATA