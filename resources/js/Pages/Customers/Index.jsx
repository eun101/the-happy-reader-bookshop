import MutedButton from '@/Components/MutedButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';


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

       
            <div className="py-12">
                <div className="">
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
                                    {props.customers.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold border px-4 py-2">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center" href={`/customers/${item.cust_contact}/edit`}>
                                                        {item.cust_firstname}
                                                    </Link>
                                                </td>
                                                <td className="border px-4 py-2">{item.cust_email}</td>
                                                <td className="border px-4 py-2">{item.cust_delivery_address}</td>
                                                <td className="border px-4 py-2">{}</td>
                                             
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                {/* <Pagination resultList={props.customers}/> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}
