import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';

export default function Sales(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2>Sales</h2>}
        >
            <Head title="Sales" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                    <th className="pb-4 pt-6 px-6">TOTAL SALES</th>
                                    <th className="pb-4 pt-6 px-6">SALES THIS WEEK</th>
                                    <th className="pb-4 pt-6 px-6">SALES THIS MONTH</th>
                                    <th className="pb-4 pt-6 px-6">SALES THIS YEAR</th>
                                    <th className="pb-4 pt-6 px-6">TATAL SALES</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                    <th className="text-center pb-4 pt-6 px-6">DATE</th>
                                    <th className="text-center pb-4 pt-6 px-6">CUSTOMER</th>
                                    <th className="text-center pb-4 pt-6 px-6 ">EMAIL</th>
                                    <th className="text-center pb-4 pt-6 px-6">MOBILE NUMBER</th>
                                    <th className="text-center pb-4 pt-6 px-6">BOOK ORDERS</th>
                                    <th className="text-center pb-4 pt-6 px-6">TOTAL AMOUNT</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.sales.data.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold border px-4 py-2">
                                                <td className="pb-4 pt-6 px-11">
                                                    <Link className="flex items-center" href={`/sales/${item.sales_order_id}/edit`}>
                                                        {item.created_at}
                                                    </Link>
                                                </td>
                                                <td className="text-center border px-2 pl-2">{item.customer.cust_firstname}</td>
                                                <td className="border px-2">{item.customer.cust_email}</td>
                                                <td className="text-center border px-2 pl-2">{item.customer.cust_contact}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination resultList={props.sales}/>
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
                                    <th className="pb-4 pt-6 px-6">DATE</th>
                                    <th className="pb-4 pt-6 px-6"># Order</th>
                                    <th className="pb-4 pt-6 px-6">Order Total</th>
                                    <th className="pb-4 pt-6 px-6">BOOK ORDERS</th>
                                    <th className="pb-4 pt-6 px-6">TOTAL AMOUNT</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.sales.data.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold border px-4 py-2">
                                                <td className="pb-4 pt-2">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500" href={`/sales/${item.sales_order_id}/edit`}>
                                                        {item.created_at}
                                                    </Link>
                                                </td>
                                                <td className="text-center border px-2 pl-2">{item.customer.cust_firstname}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination resultList={props.sales}/>
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
                                    <th className="pb-4 pt-6 px-6">DATE</th>
                                    <th className="pb-4 pt-6 px-6"># Order</th>
                                    <th className="pb-4 pt-6 px-6">Order Total</th>
                                    <th className="pb-4 pt-6 px-6">BOOK ORDERS</th>
                                    <th className="pb-4 pt-6 px-6">TOTAL AMOUNT</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.sales.data.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold border px-4 py-2">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500 " href={`/sales/${item.sales_order_id}/edit`}>
                                                        {item.created_at}
                                                    </Link>
                                                </td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                                <td className="border px-2 pl-2">{}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination resultList={props.sales}/>
                        </div>
                    </div>
                </div>
            </div>
           
            
            
        </AuthenticatedLayout>
    );
}
