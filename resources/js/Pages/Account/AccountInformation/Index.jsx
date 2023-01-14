import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function AccountInformation(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>Account Information</h2>}
        >
            <Head title="Account Dashboard" />


            <div>
                Account Name:{props.customerInfo.cust_firstname} {props.customerInfo.cust_lastname}
                
            </div>




        </AuthenticatedLayoutCustomers>
    );
}
