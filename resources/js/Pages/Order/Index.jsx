import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';
import Select from '@/Components/Select';
import { compareAsc, format } from 'date-fns';
import EllipsisText from 'react-lines-ellipsis'



const onAddHandler = ()=>{
    Inertia.get(route('orders.create'));
}

export default function Orders(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className=''>Orders</h2>}
        >
            <Head title="Orders" />

            {/* <div className="flex flex-row-reverse rounded-full px-3 py-12">
                <PrimaryButton type='button'
                onClick={onAddHandler} >New Order</PrimaryButton>
                <div>{props.status}</div>
            </div> */}

            <div className="py-16 ">
                <div className="">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-12 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr>
                                    <th className="text-center pb-4 pt-6 px-6">Total Order Today</th>
                                    {/* <th className="text-center pb-4 pt-6 px-6">Total Order This Month</th> */}
                                    <th className="text-center pb-4 pt-6 px-6">Total Order This Year</th>
                                    <th className="text-center pb-4 pt-6 px-6">Total Order Since Operation</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th className='text-center font-tita-eunice text-4xl text-indigo-400'>{props.todayOrder}</th>
                                    {/* <th className='text-center font-tita-eunice text-4xl text-indigo-400'>{props.monthOrder}</th> */}
                                    <th className='text-center font-tita-eunice text-4xl text-indigo-400'>{props.yearOrder}</th>
                                    <th className='text-center font-tita-eunice text-4xl text-indigo-400'>{props.totalOrder}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-11 px-16 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>

                                <tr>
                                    <th className=" pb-4 pt-6 pl-4 ">DATE ORDERED</th>
                                    <th className=" pb-4 pt-6 pl-4 ">ORDER #</th>
                                    <th className=" pb-4 pt-6 pl-4 ">CUSTOMER</th>
                                    <th className=" pb-4 pt-6 pl-4">SHIPPING ADDRESS</th>
                                    <th className=" pb-4 pt-6 pl-8">BOOK ORDERS</th>
                                    <th className=" pb-4 pt-6 pl-8">ORDER TOTAL</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.orders.data.map((item)=>{
                                        return (

                                            
                                            <tr className="text-left border px-6">
                                                <td className="pb-4 pt-6 px-6">  {format(new Date(item.created_at), 'MMM d, yyyy')}</td>
                                                <td className="pb-4 pt-6 underline">
                                                    <Link className="flex items-center text-gray-900">
                                                    {item.ord_number}
                                                    </Link>
                                                </td>
                                                <td>{item.customer.cust_firstname} {item.customer.cust_lastname}</td>
                                                {/* <td className="pb-4 pt-6 px-6">{item.customer.cust_email}</td>
                                                <td className="pb-4 pt-6 px-6">{item.customer.cust_contact}</td> */}
                                                   <td className="pb-4 pt-6"><EllipsisText text= {item.ord_delivery_address} style ={{whiteSpace: 'pre-wrap', overflowWrap: 'break -word'}}/></td>
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
