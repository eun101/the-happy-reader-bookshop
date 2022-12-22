import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';


export default function Orders(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2>Orders</h2>}
        >
            <Head title="Orders" />

            <div className="py-12">
                <div className="">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                    <th className="pb-4 pt-6 px-6">DATE</th>
                                    <th className="pb-4 pt-6 px-6">CUSTOMER</th>
                                    <th className="pb-4 pt-6 px-6">EMAIL</th>
                                    <th className="pb-4 pt-6 px-6">MOBILE #</th>
                                    <th className="pb-4 pt-6 px-6">SHIPPING ADDRESS</th>
                                    <th className="pb-4 pt-6 px-6">BOOK ORDERS</th>
                                    <th className="pb-4 pt-6 px-6">ORDER TOTAL</th>
                                    <th className="pb-4 pt-6 px-6">STATUS</th>
                                    <th className="pb-4 pt-6 px-6">ACTIONS</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.orders.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500" href={`/orders/${item.ord_id}/edit`}>
                                                        {}
                                                    </Link>
                                                </td>
                                                <th className="pb-4 pt-6 px-6">{}</th>
                                                <th className="pb-4 pt-6 px-6">{}</th>
                                                <th className="pb-4 pt-6 px-6">{}</th>
                                                <th className="pb-4 pt-6 px-6">{item.ord_delivery_address}</th>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                                
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
           
           

        </AuthenticatedLayout>
    );
}
