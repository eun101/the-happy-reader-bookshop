import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';


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


            <div className="flex flex-row-reverse rounded-full px-3 py-12">
                <PrimaryButton type='button'
                onClick={onAddHandler} >Add New Address</PrimaryButton>
                <div>{props.status}</div>
            </div>


         




        </AuthenticatedLayoutCustomers>
    );
}
