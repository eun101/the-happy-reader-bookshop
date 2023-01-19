import JoinBanner from '@/Components/JoinBanner';
import Footer from '@/Components/Footer';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'
import { compareAsc, format } from 'date-fns';

export default function MyOrder(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>My Orders</h2>}
        >
            <Head title="My Orders" />
        <div className='py-12'>
            <table className="w-full whitespace-nowrap text-center">
                <div className='bg-gray-100 overflow-hidden shadow-sm sm:rounded-lg '>
                    <thead>
                        <tr className="">
                            <th className=" pb-7 pt-6 pl-10 text-center">Order #</th>
                            <th className=" pb-7 pt-6 pl-10 text-center">Date</th>
                            <th className=" pb-7 pt-6 pl-10 text-center">Ship To</th>
                            <th className=" pb-7 pt-6 pl-10 text-center">Order Total</th>
                            <th className=" pb-7 pt-6 pl-10 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border'>
                            <th className="font-normal pb-9 pt-12 px-6 text-sm col-sm-1">{props.customerOrderInformation.ord_number}</th>
                            <th className="font-normal pb-9 pt-12 px-6 text-sm col-sm-4">  {format(new Date(props.customerOrderInformation.created_at), 'MMM d, yyyy')}
                            </th>
                           
                            <th className="font-normal pb-9 pt-12 px-6 text-sm col-sm-2">{props.customerOrderInformation.ord_delivery_address}</th>
                            <th className="font-normal pb-9 pt-12 px-6 text-sm col-sm-2 text-red-600">₱{props.customerOrderInformation.ord_amount}</th>
                            <th className="font-normal pb-9 pt-12 pl-4 text-sm">Processing</th>
                        </tr>
                    </tbody>
                </div>
            </table>
            </div>

                            <div className="fixed top-0 right-0 px-6  sm:block">
                    {props.auth.user ?
                    <div className='pt-2 space-x-12 flex '>
                    
                        <Link href={route('dashboard.index')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            My Account
                        </Link>
                        <Link href={route('logout')} method="post" as="button" className="text-sm text-gray-700 dark:text-gray-500 underline">
                        Logout
                        </Link>
                    </div> : (
                        <>
                            <Link href={route('login')} className="text-md text-gray-700 dark:text-gray-500 no-underline hover:text-indigo-400 hover:underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-md text-gray-700 dark:text-gray-500 no-underline hover:text-indigo-400 hover:underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <JoinBanner/>
                <div className="pt-5">
            <Footer />
            </div>
         

        </AuthenticatedLayoutCustomers>
    );
}
