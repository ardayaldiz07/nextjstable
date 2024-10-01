import DataByPath from '../helpers/data-by-path';
import TD from '../td';

export default function Base({ col, item }) {
    return (
        <TD>
            {DataByPath(col.field, item)}
        </TD>
    )
}