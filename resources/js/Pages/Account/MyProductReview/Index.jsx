import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function MyProductReview(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>My Product Reviews</h2>}
        >
            <Head title="My Product Reviews" />

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
         

        </AuthenticatedLayoutCustomers>
    );
}
