import PrimaryButton from '@/Components/PrimaryButton';
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
            header={<h2 className=''>Orders</h2>}
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
                                <tr className="">
                                    <th className=" pb-4 pt-6 pl-4">DATE</th>
                                    <th className=" pb-4 pt-6 pl-4">CUSTOMER</th>
                                    {/* <th className=" pb-4 pt-6 pl-4">EMAIL</th>
                                    <th className=" pb-4 pt-6 pl-4">MOBILE #</th> */}
                                    <th className=" pb-4 pt-6 pl-4">SHIPPING ADDRESS</th>
                                    <th className=" pb-4 pt-6 pl-8">BOOK ORDERS</th>
                                    <th className=" pb-4 pt-6 pl-8">ORDER TOTAL</th>
                                    <th className=" pb-4 pt-6 pl-8">STATUS</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.orders.data.map((item)=>{
                                        return (
                                            
                                            <tr className="text-left border">
                                                <td className="pb-4 pt-6 font-mono">
                                                    <Link className="flex items-center no-underline  text-gray-900">
                                                        {item.created_at}
                                                    </Link>
                                                </td>
                                                <td className="pb-4 pt-6 px-6">{item.customer.cust_firstname}</td>
                                                {/* <td className="pb-4 pt-6 px-6">{item.customer.cust_email}</td>
                                                <td className="pb-4 pt-6 px-6">{item.customer.cust_contact}</td> */}
                                                <td className="pb-4 pt-6">{item.ord_delivery_address}</td>
                                                <td className="text-center pb-4 pt-6">{item.orders.ordlist_prod_id}</td>
                                                <td className="text-center pb-4 pt-6">{item.orders.ordlist_total}</td>
                                                <td className="pb-4 pt-6 px-6">{item.ordlist_prod_id}</td>
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
