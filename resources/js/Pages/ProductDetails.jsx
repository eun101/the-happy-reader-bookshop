import React from "react";

export default function ProductDetails(){
    return(
        <div  className="container-fluid mx-auto">
        <div className='grid grid-cols-8 gap-4'>
            <div className=' col-start-1 col-end-3 p-4'>
            <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51xsohhzRML._SX322_BO1,204,203,200_.jpg" alt=""/>
            </div>
            <div className='col-start-4 col-end-13 p-4'>
            <h2>Smarter Faster Better: The Transformative Power of Real Productivity</h2>
            <p>Smarter Faster Better is a story-filled exploration of the science of productivity, one that can help us learn
            to succeed with less stress and struggle—and become smarter, faster, and better at everything we do.
            </p>
            <p>At the core of Smarter Faster Better are eight key concepts—from motivation and goal setting to focus and
            decision making—that explain why some people and companies get so much done. Drawing on the latest  
            findings in neuroscience, psychology, and behavioral economics—as well as the experiences of CEOs,
            educational reformers, four-star generals, FBI agents, airplane pilots, and Broadway songwriters—this book
            reveals that the most productive people, companies, and organizations don’t merely act differently. They
            view the world, and their choices, in profoundly different ways.
            </p>
            <span id="instock">In stock</span>
            <div id="product-price" className="mt-3 flex ">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
            </div>
            <div>
            Quantity
            <div className="custom-number-input h-10 w-32">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"/>
            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
            </div>
            </div>
        </div>
   </div>
   </div>
   <button id="add-to-cart"
    className="px-6 py-2 transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
    to cart</button>
   </div>
    );
}