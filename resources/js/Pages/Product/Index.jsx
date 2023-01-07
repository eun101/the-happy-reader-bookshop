import PrimaryButton from '@/Components/PrimaryButton';
import MutedButton from '@/Components/MutedButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';


const onAddHandler = ()=>{
    Inertia.get(route('orders.create'));
}

export default function Product(props) {

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
            header={<h2>Product</h2>}
        >
            <Head title="Product" />

            <div className="flex flex-row-reverse rounded-full px-3 py-12">
                <PrimaryButton type='button'
                onClick={onAddHandler}>Add New Product</PrimaryButton>
                <div>{}</div>
            </div>

                <div className="py-0">
                    <div className="p-6 text-gray-900">
                        <div className='row'>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" name="keyword" placeholder="Add Filter" onKeyUp={handleChange}/>
                            </div>  
                            <div className="col-sm-10">
                                <MutedButton type='button' onClick={doSearchHandler}>Search for a user by name and email</MutedButton>
                            </div>
                        </div>
                    </div>
                </div>
      
       
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                    <th className="text-center pb-4 pt-6 px-6">BOOK TITLE</th>
                                    <th className="text-center pb-4 pt-6 px-6">AUTHOR</th>
                                    <th className="text-center pb-4 pt-6 px-6">ADDED DATE</th>
                                    <th className="text-center pb-4 pt-6 px-6">SALES</th>
                                    <th className="text-center pb-4 pt-6 px-6"># OF ORDERS</th>
                                    <th className="text-center pb-4 pt-6 px-6">STOCKS</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.products.data.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold border px-4 py-2">
                                                <td className="pb-4 pt-6 px-11">
                                                    <Link className="flex items-center px-6 py-2 focus:text-indigo-500">
                                                        {item.created_at}
                                                    </Link>
                                                </td>
                                                <td className="border px-2 pl-2">{item.prod_author}</td>
                                                <td className="border px-2 pl-2">{item.created_at}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination resultList={props.products}/>
                        </div>
                    </div>
                </div>
            </div>

           
           
            
            
        </AuthenticatedLayout>
    );
}
