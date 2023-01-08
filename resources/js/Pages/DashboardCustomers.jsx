import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Head } from '@inertiajs/inertia-react';
import Button from 'react-bootstrap/Button'

export default function DashboardCustomers(props) {
    return (
        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2>Dashboard Customers</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
                <div>
                <Button> Save</Button>
                <Button className='btn-danger'> Cancel </Button>

                </div>




            </div>
        </AuthenticatedLayoutCustomers>
    );
}
