import JoinBanner from '@/Components/JoinBanner';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'
import Footer from '@/Components/Footer';



export default function AccountDashboard(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h1>Account Dashboard</h1>}
        >
            <Head title="Account Dashboard" />


            <div className='pt-3 mx-auto'>

                <div className="py-12">
                    <div className="bg-gray-100 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 text-gray-900">
                            <h5>Account Information</h5>
                            <table className="w-full whitespace-nowrap border">
                                <thead>
                                <tr>
                                    <th className="p-3">Contact Information</th>
                                    <th className="pl-12 pr-12">Newsletters</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <div className="pl-10">{props.customerDashboard.cust_firstname}{props.customerDashboard.cust_lastname}</div>
                                    <div className="pl-10">{props.customerDashboard.cust_email}</div>
                                    <div className="pb-5 pl-10">{props.customerDashboard.cust_contact}</div>
                                </tr>
                                </tbody>
                            </table>
                            <h5 className='py-4'>Address Book</h5>
                            <table className="w-full whitespace-nowrap border">
                                <thead>
                                <tr>
                                    <th className="p-3">Default Billing Address</th>
                                    <th className="p-3">Default Shipping Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className="pb-5 pl-12 font-normal">{props.customerDashboard.billing_address.addr_street_address}</th>
                                    <th className="pb-5 pl-12 font-normal">{props.customerDashboard.shipping_address.addr_street_address}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
