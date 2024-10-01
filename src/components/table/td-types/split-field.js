import DataByPath from '../helpers/data-by-path';
import TD from '../td';

export default function SplitField({ col, item }) {
    return (
        <TD>
            {
                DataByPath(col.field, item).map((sf, k) => {
                    return (
                        <div key={k}>
                            {DataByPath(col.splitField, sf)}
                            <span>{col.splitBy}</span>
                        </div>
                    )
                })
            }
        </TD>
    )
}