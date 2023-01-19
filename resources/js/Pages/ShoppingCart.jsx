import React from 'react';

export default function ShoppingCart(){

    

return(
    <section className=" bg-gray-100 py-12 sm:py-16 lg:py-20">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
      </div>
      <div className="mx-auto mt-8 max-w-2xl md:mt-12 ">
        <div id="proceed" className="bg-white shadow">
        <h1 className="text-2xl font-semibold text-gray-900 ">Shopping Cart</h1>
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="flow-root">
              <ul className="-my-8">
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div id="product-checkout" className="shrink-0">
                    <img className="h-full w-24 max-w-full  object-cover" src="https://m.media-amazon.com/images/I/51xsohhzRML._SX322_BO1,204,203,200_.jpg" alt="" />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5 mt-4">
                        <p className="text-base font-semibold text-gray-900">Smarter Faster Better</p>
                      </div>
                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">&#8369;259.00</p>
                        <div className="sm:order-1">
                          <div className="mx-auto flex h-8 items-stretch text-gray-600">
                            <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                            <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      </button>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div id="product-checkout" className="shrink-0">
                    <img className="h-full w-24 max-w-full  object-cover" src="https://m.media-amazon.com/images/I/41bSLDwaWhL._SX394_BO1,204,203,200_.jpg" alt="" />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5 mt-4">
                        <p className="text-base font-semibold text-gray-900">First Generation</p>
                      </div>
                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">&#8369;259.00</p>
                        <div className="sm:order-1">
                          <div className="mx-auto flex h-8 items-stretch text-gray-600">
                            <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                            <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Subtotal</p>
                <p className="text-lg font-semibold text-gray-900">&#8369;518.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Shipping</p>
                <p className="text-lg font-semibold text-gray-900">&#8369;100.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">PHP</span> 618.00</p>
            </div>

            <div className="mt-6 flex  ">
            <button id="continue-shopping" className="w-80 mr-5  hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            CONTINUE SHOPPING
          </button>
            <button id="proceed-checkout" className="w-80 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            CHECKOUT
          </button>
            </div>
          </div>
          <p id="bundle-discount">Bundle discount will be applied at checkout</p>
        </div>
      </div>
    </div>
  </section>
);
}