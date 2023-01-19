import { Link } from '@inertiajs/inertia-react';

export default function NavLink1({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center text-decoration-none px-1 pt-1 text-sm font-md leading-4 text-amber-600 hover:text-amber-600 transition duration-150 ease-in-out'
                    : 'inline-flex items-center text-decoration-none px-1 pt-1 text-sm font-small text-gray-800 leading-5 hover:text-amber-600  focus:outline-none focus:text-none transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}