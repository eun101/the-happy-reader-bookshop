import Pagination from '@/Components/Pagination';
import React from 'react';

export default function Products(){
    return (
  <div id="cookbook-" className="container-fluid mx-auto">
    <div className='grid grid-cols-12 gap-4'>
    <div id="product-filter" className='col-start-1 col-end-4 p-4'>
    <h2>FILTER</h2>
    <div className="flex justify-center">
  <div id="product-categories" className="block rounded-lg  bg-white text-center">
    
  <div className="w-64 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <a id="category" href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
        CATEGORY
    </a>
    <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        COOKBOOKS
    </a>
    <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        INSPIRATIONAL
    </a>
    <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        FAMILY LIFE
    </a>
    <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        YOUTH
    </a>
    <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        SPRITUALITY
    </a>
    </div>
  </div>
  </div>
    </div>
    <div className='col-start-4 col-end-13'>
    <div className="flex flex-wrap -mx-4">
    <div  className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks"  className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/41bSLDwaWhL._SX394_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">First Generation</h6>
          <p>Frankie Gaw</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks"  className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51SXtw+k3OL._SX385_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">MEZCLA</h6>
          <p>Ixta Belfrage</p>
          <div  id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
        
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/511CT1uquTL._SX364_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Cooking mushroom</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51wE2mb1dIL._SX334_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Cook as you are</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51h0R7G7oXL._SX334_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Mexican Vegetarian</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51GvcIQqZAL._SX431_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Smitten kitchen</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/61hQSpi+LeL._SX411_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Mi Cocina</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/41zFM9e7hJS._SX387_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">What's for Dessert</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51Yc51FFB8L._SX425_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Justice of the Pies</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51jbc5KQdxL._SX395_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Savory Baking</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/41zL8eth+uL._SX343_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Is this a Cookbook?</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51iJ4EfS6FL._SX386_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">I am from Here</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/41be+lB1ATL._SX383_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Classic italian Cooking</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/51Yks0sxXZL._SX339_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">RAMBUTAN</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div id="cookbooks" className="relative  overflow-hidden">
          <img className=" h-80 w-full" src="https://m.media-amazon.com/images/I/61UYMeINIIL._SX400_BO1,204,203,200_.jpg" alt=""/>
        </div>
        <div id="cookbook-title" className="p-4 text-center">
          <h6 className="mt-2 mb-2  font-bold">Korean American Food</h6>
          <p>Rick Martinez</p>
          <div id="currency" className="mt-3 flex justify-center">
            <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">450.00</span>
          </div>
          <div id="add-cart">
          <button className="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ADD TO CART
          </button>
          </div>
        </div>
      </a> 
      </div> 
    </div>
  </div>
  </div>
  </div>
);
}