import JoinBanner from '@/Components/JoinBanner';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head,Link } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';
import Select from '@/Components/Select';


const onAddHandler = ()=>{
    Inertia.get(route('address.create'));
}

export default function Address(props) {

   
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>Address</h2>}
        >
            <Head title="Address" />

            <div className="py-2 my-3 text-gray-900 font-bold bg-yellow-300">{props.status}</div>

            
            <h5>
                Default Adresses
            </h5>
            <div>
                Default Billing Address
            </div>
            <div>
                Default Shipping Address
            </div>

            <Link href={route('address.create')} className="text-sm text-gray-700 dark:text-gray-500 underline">
              Add New Address
            </Link>


         

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
