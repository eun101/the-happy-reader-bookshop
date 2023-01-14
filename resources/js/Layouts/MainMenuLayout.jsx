import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="">
                <nav className={` ${(open ? 'hidden' : 'block') + ' lg:block' }  bg-yellow-400 text-gray-900 navbar navbar-expand-lg navbar-light`}>
                <Link href="/">
                    <ApplicationLogo className="w-1/2 mx-auto" />
                </Link>
                <div className='shrink-0 flex items-right mx-auto sticky'>
                    
                    <button
                                onClick={() => setOpen((previousState) => !previousState)}
                                className= {` ${(open ? 'hidden' : 'inline-flex') + ' lg:block'} mx-6 inline-flex items-left p-2 rounded-sm text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                            >
 
                            </button>
                    <div className=" flex top-0 text-lg">
                            <div className="px-5 font-bold">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')} className="text-md">
                                <span className="text-black ">SHOP</span>
                            </NavLink>
                            </div>
                            <div className="px-5 font-bold">
                            <NavLink href={route('orders.index')} active={route().current('myorders.index')}>
                                <span className="text-black ">CONTACT US</span>
                            </NavLink>
                            </div>
                            <div className="px-5 font-bold text-lg">
                            <NavLink href={route('orders.index')} active={route().current('orders.index')}>
                                <span className="text-black ">ABOUT US</span>
                            </NavLink>
                            </div>
                            <div className="justify-items-end">
                            <NavLink href={route('orders.index')} active={route().current('blogs.index')}>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                             </svg>
                            </NavLink>
                            </div>
                    </div>
                  
                </div>
                
  
            </nav>

            

            

            <div className="">
                {children}
            </div>
        </div>
    );
}
