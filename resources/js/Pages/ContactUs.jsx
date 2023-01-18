import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import MainMenuLayout from '@/Layouts/MainMenuLayout';

export default function ContactUs() {
  return (
    <MainMenuLayout>
      <div className="container-fluid">
        <div className="col">
          <h1 className="text-center p-5">HOW CAN WE HELP?</h1>
          <img src='https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/contact-banner.jpg' className="h-96 w-full object-cover object-top" />

        </div>
        <div className="col"></div>
      </div>
      <div id="faqs" className='container'>
        <p className="p-5 text-center">Below are frequently asked questions. In case this doesn't resolve your concern
          feel free  to send us a message via contact from below.
        </p>
        <h1 className="text-center pb-5">Frequently Asked Questions</h1>
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
            <Accordion.Header>How do I browse for books?</Accordion.Header>
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
            <Accordion.Header>How do I add items to my Shopping Cart?</Accordion.Header>
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
            <Accordion.Header>Can I pay Cash on Delivery (COD)?</Accordion.Header>
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
            <Accordion.Header>What happens after I’ve paid? Do I get a notification?</Accordion.Header>
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
            <Accordion.Header>Why do the prices of some items change?</Accordion.Header>
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
            <Accordion.Header>Where in the Philippines do you ship and what shipping provider do you use?</Accordion.Header>
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
      <div id="contact-form" className="container-fluid pt-2 ">
        <div id="contact-formcontent" className="container ">
          <h2 className="text-center pb-5">Contact Us</h2>
          <form>
            <div className="form-group pb-3">
              <label for="fullname">Name:</label>
              <input type="text" className="form-control" id="contact-fullname" aria-describedby="fullnameHelp" placeholder=" " />
            </div>
            <div className="form-group pb-3">
              <label for="exampleInputPassword1">Email:</label>
              <input type="email" className="form-control" id="contact-email" placeholder=" " />

            </div>
            <div className="form-group pb-3">
              <label for="contact-commentbox">What's on your mind?</label>
              <textarea className="form-control" id="contact-commentbox" rows="3"></textarea>
            </div>
            <br />
            <button id="contact-submit" type="submit" className="btn btn-primary">SUBMIT</button>
          </form>
        </div>
      </div>
    </MainMenuLayout>
  );
}