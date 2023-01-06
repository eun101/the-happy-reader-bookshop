import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';
import AdminMainMenu from '@/Components/AdminMainMenu';

export default function Authenticated({ auth, header, children }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <nav className={` ${(open ? 'hidden' : 'block') + ' lg:block' } text-medium border-neutral-800 left-0 top-0 bottom-0 h-100 fixed flex-col-6 h-screen p-2 bg-neutral-800 shadow duration-300`}>
               
                
                <div className='shrink-0 flex items-right mx-auto'>
                    <NavLink href="/">
                        <p className=" text-lg pt-3 text-gray-100 hover:text-yellow-300 transition duration-150 ease-in-out">
                            the HAPPYREADER
                        </p>
                    </NavLink>
                    <button
                                onClick={() => setOpen((previousState) => !previousState)}
                                className= {` ${(open ? 'hidden' : 'inline-flex') + ' lg:block'} mx-6 inline-flex items-left p-2 rounded-sm text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                            >

                                <svg className="h-6 w-6 z-100" stroke="white" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={` ${(open ? 'inline-flex' : '') + ' lg:hidden'}`}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                </div>
                <div>
                    <hr className="mt-2 w-38 h-px bg-gray-300 border-0 dark:bg-gray-700" />
                </div>
                <AdminMainMenu/>
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-small pt-5 ">
                            <button
                                type="button"
                                className=" inline-flex items-center mx-auto px-4 py-2 border border-transparent text-small leading-4 font-small rounded-md text-gray-500 bg-white hover:text-amber-300 focus:outline-none transition ease-in-out duration-150"
                            >
                                {auth.user.name}

                                <svg
                                    className="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    xml:space="preserve"
                                    version="1.1"
                                    id="Icons"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 10 32"
                                    strokeWidth={2}
                                >

                                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                                    </g>
                                    <g id="SVGRepo_iconCarrier"> <g>
                                        <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z"></path> <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z"></path>
                                        <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,25z"> </path></g> </g>
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </nav>

            <div className=" mx-auto sm:px-6 lg:px-12">
                {header && (
                    <header className="w-full bg-white shadow py-2 sm:px-12 lg:px-12">
                        <div className="flex items-center">
                            <button
                                onClick={() => setOpen((previousState) => !previousState)}
                                className={` ${(open ? 'inline-flex' : 'hidden') + ' lg:hidden'} mx-6 inline-flex items-left rounded-sm text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                            >

                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={` ${(open ? 'inline-flex' : 'hidden') }`}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={` ${(open ? 'inline-flex' : 'hidden')}`}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                            {header}
                        </div>
                    </header>
                )}
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}