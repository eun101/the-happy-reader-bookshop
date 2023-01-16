import JoinBanner from '@/Components/JoinBanner';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'



export default function AccountDashboard(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h1>Account Dashboard</h1>}
        >
            <Head title="Account Dashboard" />


            <div className='pt-3 mx-auto'>
                <h4>Account Information</h4>

                <h6>Contact Information</h6>
                <div className=''> {props.customerDashboard.cust_firstname} {props.customerDashboard.cust_lastname}</div>

                <div className=''>{props.customerDashboard.cust_email}</div>
                <div className=''>{props.customerDashboard.cust_contact}</div>

                <div className='pt-3'>
                    <h4>Address Book</h4>
                </div>
                <div>{props.customerDashboard.billing_address.addr_street_address}</div>
                <div>{props.customerDashboard.shipping_address.addr_street_address}</div>
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





        </AuthenticatedLayoutCustomers>
    );
}
