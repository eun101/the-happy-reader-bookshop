import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-1/3 mx-auto pb-5" />
                </Link>
            </div>

            <div className="">
                {children}
            </div>
        </div>
    );
}
