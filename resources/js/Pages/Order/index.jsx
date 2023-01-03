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
                        <div className="p-12 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr>
                                    <th className="pb-4 pt-6 px-6">Total Order Today</th>
                                    <th className="pb-4 pt-6 px-6">Total Order This Week</th>
                                    <th className="pb-4 pt-6 px-6">Total Order This Month</th>
                                    <th className="pb-4 pt-6 px-6">Total Order This Year</th>
                                    <th className="pb-4 pt-6 px-6">Total Order</th>
                                </tr>
                                </thead>
                            </table>
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

                                            <tr className="text-left font-bold border px-4 py-2">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center" href={`/orders/${item.ord_id}/edit`}>
                                                        {item.created_at}
                                                    </Link>
                                                </td>
                                                
                                                <td className="border px-4 py-2">{item.cust_firstname}</td>
                                                <td className="border px-4 py-2">{}</td>
                                                <td className="border px-4 py-2">{}</td>
                                                <td className="border px-4 py-2">{item.ord_delivery_address}</td>
                                                <td className="border px-4 py-2">{}</td>
                                                <td className="border px-4 py-2">{item.ord_amount}</td>

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
