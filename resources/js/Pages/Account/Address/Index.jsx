import JoinBanner from '@/Components/JoinBanner';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head,Link } from '@inertiajs/inertia-react';
import PowerButton from '@/Components/PowerButton';
import Select from '@/Components/Select';
import MutedButton from '@/Components/MutedButton';


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

            <div className="py-2 my-3 text-gray-900 font-bold">{props.status}</div>
            
            <div className="">
                    <div className="bg-gray-100 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-3 text-gray-900">
                            <h5>Default Addresses</h5>
                            <table className="w-full whitespace-nowrap border">
                                <thead>
                                <tr>
                                    <th className="text-center pb-4 pt-6 ">Default Billing Address</th>
                                    <th className="text-center pb-4 pt-6 ">Default Shipping Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className="text-center pb-4 pt-6 text-sm">Address</th>
                                    <th className="text-center pb-4 pt-6 text-sm">Address</th>
                                </tr>
                                </tbody>
                            </table>
                            <h5 className='py-7'>Additional Address Entries</h5>
                            <table className='border w-full whitespace-nowrap border text-center'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </table>
                            <MutedButton href={route('address.create')} className="text-sm text-gray-700 dark:text-gray-500 no-underline">
                                Add New Address
                            </MutedButton>
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




        </AuthenticatedLayoutCustomers>
    );
}
