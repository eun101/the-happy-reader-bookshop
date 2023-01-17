import JoinBanner from '@/Components/JoinBanner';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function MyOrder(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>My Orders</h2>}
        >
            <Head title="My Orders" />

            <table className="w-full whitespace-nowrap ">
                                <thead>
                                <tr className="">
                                    <th className=" pb-4 pt-6 pl-4 text-center">Order #</th>
                                    <th className=" pb-4 pt-6 pl-4 text-center">Date</th>
                                    <th className=" pb-4 pt-6 pl-4 text-center">Ship To</th>
                                    <th className=" pb-4 pt-6 pl-4 text-center">Order Total</th>
                                    <th className=" pb-4 pt-6 pl-4 text-center">Status</th>
                                </tr>
                                </thead>
                                <thead>
                                <tr className="">
                                    <th className=" pb-4 px-6 pl-4 text-sm">{props.customerOrderInformation.ord_number}</th>
                                    <th className=" pb-4 px-6 pl-4 text-sm">{props.customerOrderInformation.created_at}</th>
                                    <th className=" pb-4 px-6 pl-4 text-sm">{props.customerOrderInformation.ord_delivery_address}</th>
                                    <th className=" pb-4 px-6 pl-4 text-sm">{props.customerOrderInformation.ord_amount}</th>
                                    <th className=" pb-4 px-6 pl-4 text-sm">Status</th>
                                </tr>
                                </thead>
                            </table>

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
         

        </AuthenticatedLayoutCustomers>
    );
}
