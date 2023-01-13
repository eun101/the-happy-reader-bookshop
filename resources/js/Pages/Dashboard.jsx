
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button';


export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className=''>Dashboard Admin</h2>}

        >
            <Head title="Dashboard " />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-14 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr>
                                    <th className="text-center pb-4 pt-6 px-6">To Be Packed</th>
                                    <th className="text-center pb-4 pt-6 px-6">To Be Shipped</th>
                                    <th className="text-center pb-4 pt-6 px-6">Shipped</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {props.sales.data.map((item)=>{
                                    return (
                                        <tr className="text-left border">
                                            <td className="pb-4 pt-3 px-11 font-mono">
                                                <Link className="flex items-center no-underline  text-gray-900" href={`/sales/${item.sales_order_id}/edit`}>
                                                    {item.created_at}
                                                </Link>
                                            </td>
                                            <td className="pb-4 pt-6 px-6">{item.cust_firstname}</td>
                                            <td className="pb-4 pt-6 px-6">{item.cust_email}</td>
                                            <td className="pb-4 pt-6 px-6">{item.cust_contact}</td>
                                        </tr>
                                    );
                                })}
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

    
            
            
            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-14 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr>
                                    <th className="pb-4 pt-6 px-6">Order/s Today</th>
                                    <th className="pb-4 pt-6 px-6">Total Orders This Week</th>
                                    <th className="pb-4 pt-6 px-6">Total Orders This Month</th>
                                    <th className="pb-4 pt-6 px-6">Total Orders This Year</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-14 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr>
                                    <th className="pb-4 pt-6 px-6">Sales Today</th>
                                    <th className="pb-4 pt-6 px-6">Sales This Week</th>
                                    <th className="pb-4 pt-6 px-6">Sales This Month</th>
                                    <th className="pb-4 pt-6 px-6">Sales This Year</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-12 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr>
                                    <th className="pb-4 pt-6 px-6">Total Available Books</th>
                                    <th className="pb-4 pt-6 px-6">Total Books Sold</th>
                                    <th className="pb-4 pt-6 px-6">Total Customers</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
