import { Link, Head } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import PrimaryButton from '@/Components/PrimaryButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import MainMenuLayout from '@/Layouts/MainMenuLayout';
import S3Image from '@/Components/S3Image';
import JoinBanner from '@/Components/JoinBanner';
import Footer from '@/Components/Footer';

const showProduct = () => {
    Inertia.get(route('product.show'));
}

export default function Welcome(props) {
    return (
        <MainMenuLayout>
            <div>
                <div className="">


                    <div className='relative'>
                        <div className='flex'>
                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/banner1.png" alt="hero-banner" className='w-auto' />
                        </div>
                        <div className='absolute text-5xl text-gray-900 top-1/2  left-1/2  -translate-y-1/2'>
                            <h1 className='italic pb-2'>
                                "Stories you can't miss to uncover <br />in the magical world of <br />the Happy Reader"
                            </h1>
                            <h1 className='non-italic'>

                            </h1>
                            <div>
                            <Link href={route('product.show')}> <PrimaryButton className='center text-lg' onClick={showProduct}>
                                    Discover More!    &#8594;
                                </PrimaryButton>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <section className="">
                        <div className="why-content">
                            <div className="pt-5 mx-48 ">
                                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/2.png" alt="why excelente" className="mb-1" />
                                            <h3 className='pt-5'>We're happy to help</h3>
                                            <p className='mx-auto'>Contact us anytime at info.thehappyreader.com and we will respond within 1-2 business days</p>
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/1.png" alt="why excelente" className="mb-1" />
                                            <h3 className='pt-5'>Amazing Books</h3>
                                            <p className='mx-auto'>Choose from the wide variety of books curated just for you</p>
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/3.png" alt="why excelente" className="mb-1" />
                                            <h3 className='pt-5'>Fast Delivery</h3>
                                            <p className='mx-auto'>Contact us anytime at info.thehappyreader.com and we will respond within 1-2 business days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="">
                    <Link href={route('product.show')}>
                        <div className="why-content">
                            <div className="pt-20 mx-48 ">
                                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-3">
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/4.png" alt="why excelente" className="mb-1" />
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/5.png" alt="why excelente" className="mb-1" />
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/9.png" alt="why excelente" className="mb-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why-content mx-auto">
                            <div className="pt-3 mx-48">
                                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 justify-content ">
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/7.png" alt="why excelente" className="mb-1" />
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/8.png" alt="why excelente" className="mb-1" />
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="why-excelente-body">
                                            <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/10.png" alt="why excelente" className="mb-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </section>
                    <section className=" pb-10">
                    </section>
                    <div className="fixed top-0 right-0 px-6  sm:block">
                        {props.auth.user ?
                            <div className='pt-2 space-x-12 flex '>

                                <Link href={route('dashboard-display.index')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                    My Account
                                </Link>
                                <Link href={route('logout')} method="post" as="button" className="text-sm text-gray-700 dark:text-gray-500 underline">
                                    Logout
                                </Link>
                            </div> : (
                                <>
                                    <Link href={route('login')} className="text-md text-gray-700 dark:text-gray-500 no-underline hover:text-indigo-400 hover:underline">
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ml-4 text-md text-gray-700 dark:text-gray-500 no-underline hover:text-indigo-400 hover:underline"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                    </div>
                    <JoinBanner />
                </div>
            </div>
        </MainMenuLayout>
    );
}