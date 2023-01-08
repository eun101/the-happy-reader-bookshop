import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';


export default function Blogs(props) {

   

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2>Blog</h2>}
        >
            <Head title="Blog" />

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
                                {/* <tbody>
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
                                </tbody> */}
                            </table>
                        
                        </div>
                    </div>
                </div>
            </div>
           
           

        </AuthenticatedLayout>
    );
}
