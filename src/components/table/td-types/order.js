import TD from '../td';

export default function OrderField({index}) {
    return (
        <TD>
            {
                <div className='text-center'>
                    <span>{index}</span>
                </div>   
            }
        </TD>
    )
}