import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default function ContactUs(){
    return (
    <section>
    <div className="container-fluid">
      <div style={{backgroundImage:"url(./contact-banner.jpg)",backgroundSize:"cover"}}id="banner" className="row vh-100">
      <div className="col">
      <h1 className="contact-title">CONTACT US</h1>
      </div>
      <div className="col"></div>
      </div>
      </div>
      <div id="faqs" className='container'>
        <p>Below are frequently asked questions. In case this doesn't resolve your concern
            feel free  to send us a message via contact from below.
        </p>
        <h1>Frequently Asked Questions</h1>
    <Accordion id="faqs-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why do I need to register on the site before I can place an order?</Accordion.Header>
        <Accordion.Body>
        Establishing an online account with theHAPPYReader assures you that your purchasing information is secure, confidential and accessible to you.  Once you establish an account, you will only need to sign-in to place an order in the future, check on the status of your current order,  view past purchases or update your profile information.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>My order hasn't arrived yet; can I check the status of my order online?</Accordion.Header>
        <Accordion.Body>
        Yes. If you are Signed In to your account, click on Orders in the header above to review open order status.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What if I can't find what I'm looking for?</Accordion.Header>
        <Accordion.Body>
        The best way to locate a product in the online bookstore is to use the Product Search functions located in the top navigation area of the bookstore. If you need further help, call us at 02-8123-4567.
        If you are looking for information on other Hazelden services or programs, type a keyword in the Search box in the upper right corner of any page on the theHAPPYReader Web site. If you have a product catalog, you can order items by their item number in Online Quick Order.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
      <div id="contact-form" className="container-fluid">
    <div id="contact-formcontent" className="container ">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <form>
         <div className="form-group">
             <label for="fullname">Name:</label>
             <input type="text" className="form-control" id="contact-fullname" aria-describedby="fullnameHelp" placeholder=" "/>
         </div>
         <div className="form-group">
             <label for="exampleInputPassword1">Email:</label>
             <input type="email" className="form-control" id="contact-email" placeholder=" "/>
             
         </div>
         <div className="form-group">
             <label for="contact-commentbox">What's on your mind?</label>
             <textarea className="form-control" id="contact-commentbox" rows="3"></textarea>
         </div>
        <br/>
         <button id="contact-submit" type="submit" className="btn btn-primary">SUBMIT</button>
         </form>
         </div>
         </div>
         <div id="footer" className="container-fluid ">
                <div className="row">
                    <div className="col-md-3  ">
                    <h2>Useful Links</h2>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Return Policy</p>
                    <p>Discount Coupons</p>
                    </div>
                    <div className="col-md-3 ">
                    <h2>Our Company</h2>
                    <p>About Us</p>
                    <p>Partners</p>
                    <p>Careers</p>
                    <p>Affiliate Programs</p>
                    </div>
                    <div className="col-md-3 ">
                    <h2>Follow Us On</h2>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>LinkedIn</p>
                    </div>
                    <div className="col-md-3 footer-image">
                    <h2>Download App</h2>
                    <img id="playstore" className="img-fluid" src="./goggleapp.png" alt="playstore"/>
                    <img id="applestore" className="img-fluid" src="./apolstore.png" alt="applestore"/>
                    </div>
                </div>
                <hr/>
                <p className="copyright text-center">&#169;theHAPPYReader, All rights reserved 2022</p>
            </div>
    </section>
    );
}