import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function Wishlist(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>Wishlist</h2>}
        >
            <Head title="Wishlist" />

            <div>Book Wishlist Here</div>


         

        </AuthenticatedLayoutCustomers>
    );
}
