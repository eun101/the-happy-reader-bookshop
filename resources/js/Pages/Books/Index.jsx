import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';

export default function Books(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h5>Books</h5>}
        >
            <Head title="Books" />

       
            <div className="py-12">
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
                                {/* <tbody>
                                    {props.customers.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500" href={`/customers/${item.cust_contact}/edit`}>
                                                        {}
                                                    </Link>
                                                </td>
                                                <td className="pb-4 pt-6 px-6">{}</td>
                                                <td className="pb-4 pt-6 px-6">{}</td>
                                                <td className="pb-4 pt-6 px-6">{}</td>
                                             
                                            </tr>
                                        );
                                    })}
                                </tbody> */}
                            
                            </table>
                        </div>
                    </div>
                </div>
            </div>

           
           
            
            
        </AuthenticatedLayout>
    );
}
