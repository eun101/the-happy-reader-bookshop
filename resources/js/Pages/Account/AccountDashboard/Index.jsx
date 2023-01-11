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
            <div>
            <div>
            <h4>Account Information</h4>
            </div>

            <div>
                <h6>Contact Information</h6>
            </div>

            <div>
                <p>---Contact Details Here---</p>
            </div>

            {/* {props.accountdashboard.data.map((item)=>{
                return (

            <Link className="flex items-center px-6 py-2 focus:text-indigo-500 text-gray-900">

                Edit Address
                </Link>


            );
        })} */}
            {/* <Link className="flex items-center px-6 py-2 focus:text-indigo-500 text-gray-900" href={`/customer/account/address/${item.cust_id}/edit`}>

                Edit
                </Link> */}

            </div>

            <div>
            <h5>Address Account</h5>

            <div>
                <p>---Address Details Here---</p>
            </div>

 
            </div>
         




        </AuthenticatedLayoutCustomers>
    );
}
