import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';


const onAddHandler = ()=>{
    Inertia.get(route('customers.create'));
}
export default function Address(props) {

   
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>Add New Address</h2>}
        >
            <Head title="Address" />



         




        </AuthenticatedLayoutCustomers>
    );
}
