import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function MyOrder(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>My Orders</h2>}
        >
            <Head title="My Orders" />

            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="">
                                    <th className=" pb-4 pt-6 pl-4">Order #</th>
                                    <th className=" pb-4 pt-6 pl-4">Date</th>
                                    <th className=" pb-4 pt-6 pl-4">Ship To</th>
                                    <th className=" pb-4 pt-6 pl-4">Order Total</th>
                                    <th className=" pb-4 pt-6 pl-4">Status</th>
                                </tr>
                                </thead>
                            </table>

         

        </AuthenticatedLayoutCustomers>
    );
}
