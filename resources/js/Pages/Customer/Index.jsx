import PrimaryButton from '@/Components/PrimaryButton';
import MutedButton from '@/Components/MutedButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';



const onAddHandler = ()=>{
    Inertia.get(route('customers.create'));
}

export default function Customers(props) {

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
            header={<h2>Customers</h2>}
        >
            <Head title="Customer" />

            <div className="flex flex-row-reverse rounded-full px-3 py-12">
                <PrimaryButton type='button'
                onClick={onAddHandler} >Add New Customer Account</PrimaryButton>
                <div>{props.status}</div>
            </div>



            <div className="py-5">
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

       
            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                    <th className="pb-4 pt-6 px-6">NAME</th>
                                    <th className="pb-4 pt-6 px-6">EMAIL</th>
                                    <th className="pb-4 pt-6 px-6">SHIPPING ADDRESS</th>
                                    <th className="pb-4 pt-6 px-6">JOINED</th>
                                    <th className="pb-4 pt-6 px-6">PURCHASES</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.customers.data.map((item)=>{
                                        return (

                                            <tr className="text-left border px-4 py-2">
                                                <td className="pb-4 px-11 font-mono">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500 no-underline text-gray-900">
                                                        {item.cust_firstname}
                                                    </Link>
                                                </td>
                                                <td className="pb-4 pt-6 px-6">{item.cust_email}</td>
                                                <td className="pb-4 pt-6 px-6">{item.cust_delivery_address}</td>
                                                <td className="pb-4 pt-6 px-6">{}</td>
                                                <td className="pb-4 pt-6 px-6">{}</td>
                                         

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination resultList={props.customers}/>
                        </div>
                    </div>
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}
