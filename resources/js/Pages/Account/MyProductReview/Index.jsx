import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function MyProductReview(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>My Product Reviews</h2>}
        >
            <Head title="My Product Reviews" />


         

        </AuthenticatedLayoutCustomers>
    );
}
