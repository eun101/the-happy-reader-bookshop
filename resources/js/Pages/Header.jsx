import React, { useState, useEffect } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';




function Header (){


    const CustomLink = ({ to, children, ...props }) => { 
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname})
        
        return (
            <li className= {isActive ? "active" : ""}>
                <Link to={to} {...props}>
                {children}
                </Link>
            </li>
        )
    }
  
        return(
            <div>
                <Navbar expand="lg" fixed="top" className="bg-light">
            
                    <div className="col-4 px-5">
                    <Link to="/"><img src="./img2.png" alt="logo"></img></Link>
                    </div>
                        <div className="col-8">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                                <ul>
                                    <CustomLink to ="/"></CustomLink>
                                    <CustomLink to="/about">About Us</CustomLink>
                                    <CustomLink to="/courses/all">Courses</CustomLink>
                                    <CustomLink to="/community">Community</CustomLink>
                                    <CustomLink to="/pricing">Pricing</CustomLink>
                                    <CustomLink to="/successstories">Success Stories</CustomLink>
                                    
                                </ul>
                        </Navbar.Collapse>
                       
                        </div>
                
                </Navbar>
                </div>
             
        );
    }







export default Header;
