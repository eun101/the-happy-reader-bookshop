import MutedButton from '@/Components/MutedButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';
import { compareAsc, format } from 'date-fns';
import EllipsisText from 'react-lines-ellipsis'

export default function Inventory(props) {

    const [filters, setFilters] = useState();

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setFilters(values=>({...values, [fieldName]: fieldValue}));

    }

    const doSearchHandler = (event) =>{

        Inertia.get(route(route().current()),filters,
        {
            preserveState: true,
            replace: true,
        }); 

    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2>Inventory</h2>}
        >
            <Head title="Inventory" />

            <div className="py-12">
                <div className="p-6 text-gray-900">
                    <div className='row'>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="keyword" placeholder="Search by Title" onKeyUp={handleChange}/>
                        </div>  
                        <div className="col-sm-2">
                            <MutedButton type='button' onClick={doSearchHandler}>Search</MutedButton>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="py-12">
                <div className="">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-7 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                    {/* <th className="text-center pb-4 pt-6 px-6">BOOK COVER</th> */}
                                    <th className="text-center pb-4 pt-6 px-6">BOOK TITLE</th>
                                    <th className="text-center pb-4 pt-6 px-6">CREATED DATE</th>
                                    {/* <th className="text-center pb-4 pt-6 px-6">CATEGORY</th> */}
                                    <th className="text-center pb-4 pt-6 px-6"># OF ORDERS</th>
                                    {/* <th className="text-center pb-4 pt-6 px-6">STOCKS</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                    {props.inventories.data.map((item)=>{
                                        return (

                                            <tr className="text-left border px-4 py-2">
                                                {/* <td className="pb-4 pt-6 px-11 font-mono">
                                                    <Link className="flex items-center px-6 py-3 focus:text-indigo-500 no-underline  text-gray-900">
                                                        {}
                                                    </Link>
                                                </td> */}
                                                <td className="text-left pb-4 pt-6 px-6"> <EllipsisText text= {item.product.prod_title} style ={{overflowWrap: 'break -word'}}/>
</td>
                                                <td className="text-center pb-4 pt-6 px-6"> {format(new Date(item.created_at), 'MMM d, yyyy')}</td>
                                                {/* <td className="text-center pb-4 pt-6 px-6">{item.categories.categ_category_name}</td> */}
                                                <td className="text-center pb-4 pt-6 px-6">{item.orders.ord_cust_id}</td>
                                            
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination resultList={props.inventories}/>
                        </div>
                    </div>
                </div>
            </div>            
        </AuthenticatedLayout>
    );
}