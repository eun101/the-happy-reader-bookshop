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
                                <tr>
                                    <th className="pb-4 pt-6 px-6">TOTAL SALES</th>
                                    <th className="pb-4 pt-6 px-6">SALES THIS WEEK</th>
                                    <th className="pb-4 pt-6 px-6">SALES THIS MONTH</th>
                                    <th className="pb-4 pt-6 px-6">SALES THIS YEAR</th>
                                    <th className="pb-4 pt-6 px-6">TATAL SALES</th>
                                </tr>
                                </thead>
                            </table>
                            {/* <Pagination resultList={props.sales}/> */}
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
                                    <th className="pb-4 pt-6 px-6">CUSTOMER</th>
                                    <th className="pb-4 pt-6 px-6">EMAIL</th>
                                    <th className="pb-4 pt-6 px-6">MOBILE NUMBER</th>
                                    <th className="pb-4 pt-6 px-6">BOOK ORDERS</th>
                                    <th className="pb-4 pt-6 px-6">TOTAL AMOUNT</th>
                                </tr>
                                </thead>
                                {/* <tbody>
                                    {props.sales.map((item)=>{
                                        return (

                                            <tr className="text-left font-bold">
                                                <td className="pb-4 pt-6 px-6">
                                                    <Link className="flex items-center px-6 py-4 focus:text-indigo-500" href={`/sales/${item.sales_order_id}/edit`}>
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
                                {/* <tbody>
                                    {sale.map(({ sales_id, sales_order_id, sales_total_amount }) => (
                                        <tr>
                                            <td className="border px-4 py-2">{ sales_id }</td>
                                            <td className="border px-4 py-2">{ sales_order_id }</td>
                                            <td className="border px-4 py-2">{ sales_total_amount }</td>
                                            <td className="border px-4 py-2">
                                            </td>
                                        </tr>
                                    ))}
  
                                    {sale.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No sale found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody> */}
                            </table>
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
                                {/* <tbody>
                                    {sale.map(({ sales_id, sales_order_id, sales_total_amount }) => (
                                        <tr>
                                            <td className="border px-4 py-2">{ sales_id }</td>
                                            <td className="border px-4 py-2">{ sales_order_id }</td>
                                            <td className="border px-4 py-2">{ sales_total_amount }</td>
                                            <td className="border px-4 py-2">
                                            </td>
                                        </tr>
                                    ))}
  
                                    {sale.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No sale found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           
            
            
        </AuthenticatedLayout>
    );
}
