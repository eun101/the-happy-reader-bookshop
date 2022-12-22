import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';


export default function Orders(props) {

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

    const onAddHandler = ()=>{
        Inertia.get(route('orders.create'));
    }


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders</h2>}
        >
            <Head title="Orders" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-4">
                <PrimaryButton type='button' onClick={onAddHandler}>+Add</PrimaryButton>
                <div>{props.status}</div>
            </div>

            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div class="grid grid-cols-5 gap-2">
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" name="keyword" placeholder="Keyword" onKeyUp={handleChange}/>
                                </div>                                
                                <div className="col-sm-2">
                                    <input type="date" className="form-control" name="date_from" placeholder="Date From" onChange={handleChange}/>
                                </div>
                                <div className="col-sm-2">
                                    <input type="date" className="form-control" name="date_to" placeholder="Date To" onChange={handleChange}/>
                                </div>
                                <div className="col-sm-2">
                                    <PrimaryButton type='button' onClick={doSearchHandler}>Search</PrimaryButton>
                                </div>
                            </div>
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
                                    <th className="pb-4 pt-6 px-6">Order #</th>
                                    <th className="pb-4 pt-6 px-6">Order To</th>
                                    <th className="pb-4 pt-6 px-6">Date</th>
                                    <th className="pb-4 pt-6 px-6">Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.orders.data.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500" href={`/orders/${item.ord_id}/edit`}>
                                                        {item.ord_number}
                                                    </Link>
                                                </td>
                                                <td className="pb-4 pt-6 px-6">{item.ord_cust_id}</td>
                                                <td className="pb-4 pt-6 px-6">{item.ord_delivery_address}</td>
                                                <td className="pb-4 pt-6 px-6">{item.ord_amount}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        
                            <Pagination resultList={props.orders}/>
                        </div>
                    </div>
                </div>
            </div>
           
           

        </AuthenticatedLayout>
    );
}
