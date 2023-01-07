import NavLink from 'react-bootstrap/NavLink';
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

export default function Welcome(props) {
    return (
        <>
            <Navbar>
                <div className="col-5 px-5">
                    <Navbar.Brand href="#home">
                        <Link to="/"><img src="./img2.png" alt="logo"></img></Link>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href={route('login')} active={route().current('login')}> Shop </NavLink>
                        <NavLink href={route('login')} active={route().current('login')}> Blog </NavLink>
                        <NavLink href={route('login')} active={route().current('login')}>Contact Us </NavLink>
                        <NavLink href={route('login')} active={route().current('login')}>About Us </NavLink>

                        <div className="fixed top-0 right-0 p-4 px-5">
                            {props.auth.user ? (

                                <Navlink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </Navlink>

                            ) : (
                                <>
                                    <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <section className='hero-banner'>
                <div className='container'>
                    <div>
                        This is where the hero banner will go
                    </div>

                    <Button className='shop-now'>
                        Shop Now

                    </Button>
                </div>
            </section>
        </>
    );
}