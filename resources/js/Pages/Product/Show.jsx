import MutedButton from '@/Components/MutedButton';
import Wishlist from '@/Components/Wishlist';

import PrimaryButton from '@/Components/PrimaryButton';
import MainMenuLayout from '@/Layouts/MainMenuLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';
import S3Image from '@/Components/S3Image';
import InputLabel from '@/Components/InputLabel';
import Select from '@/Components/Select';
import EllipsisText from 'react-lines-ellipsis'




const onAddHandler = () => {
    Inertia.get(route('products.create'));
}

export default function Product(props) {

    const [filters, setFilters] = useState();
    const [show, setShow] = useState(false);


    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setFilters(values => ({ ...values, [fieldName]: fieldValue }));

        if (fieldName == 'attachment') {
            setData(data => ({ ...data, [fieldName]: event.target.files[0] }));
        } else {
            setData(data => ({ ...data, [fieldName]: fieldValue }));
        }
    }


    const doSearchHandler = (event) => {

        Inertia.get(route(route().current()), filters,
            {
                preserveState: true,
                replace: true,
            });
        
    }

    const onCancelHandler = () => {
        Inertia.get(route('products.index'));
    }

    


    return (
        <MainMenuLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2>Product</h2>}
        >
            <Head title="Product" />

            <div className='col-start-1 col-end-2 p-4 mx-auto bg-emerald-50'>
            <Link href={'/product-list'}>
            <h1 className=' mx-auto text-yellow-700 text-center'>THE SHOP</h1>
            </Link>
            </div>

            <div className="py-0 bg-emerald-50">
                <div className="p-6 text-gray-900">
                    <div className='row flex justify-end'>
                        <div className="col-sm-2 pt-12">
                            <input type="text" className="form-control" name="keyword" placeholder="" onKeyUp={handleChange}/>
                        </div>  
                        <div className="col-sm-2 pl-12 pt-12">
                            <MutedButton type='Link' onClick={doSearchHandler}>Search</MutedButton>
                        </div>
                    </div>
                </div>
            </div>      

          

            <ul className='pt-3'>
                <Link className="hover:text-yellow-700 text-gray-900 px-5" value="" >All</Link>
                <Link className="hover:text-yellow-700 text-gray-900 px-5" value="Personal Development" >Spirituality</Link>
                <Link className="hover:text-yellow-700 text-gray-900 px-5" value="Productivity Hacks" >Cookbook</Link>
                <Link className="hover:text-yellow-700 text-gray-900 px-5" value="Communicating" >Inspirational</Link>
                <Link className="hover:text-yellow-700 text-gray-900 px-5" value="Leadership" >Youth</Link>
                <Link className="hover:text-yellow-700 text-gray-900 px-5" value="Creativity" >Family Life</Link>
            </ul>

            
            <div class="p-5 bg-emerald-50 ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 ">
                    {props.products.data.map((item) => {
                        return (
                            
                            <div class=" bg-white-400 rounded-md mx-auto box-border bg-white p-4 border-4">
                                <div className='rounded-full pb-3'>
                                <S3Image imagePath={item.attachment.att_storage_path} />
                                </div>
                                    <div className="">
                                    <div className=''>
                                    <Link className=" py-4 focus:text-yellow-500 hover:text-yellow-500 text-gray-900" href={`/product-list/${item.prod_id}/`}>
                                    <EllipsisText text= {item.prod_title} style ={{whiteSpace: 'pre-wrap', overflowWrap: 'break -word'}}/>
                                    </Link>
                                    </div>
                                    <div>{item.prod_author}</div>
                                    <div className='flex flex-row relative align-bottom text-xl font-bold'>
                                    <svg fill="#000000" width="18px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>peso-line</title> <path d="M31,13.2H27.89A6.81,6.81,0,0,0,28,12a7.85,7.85,0,0,0-.1-1.19h2.93a.8.8,0,0,0,0-1.6H27.46A8.44,8.44,0,0,0,19.57,4H11a1,1,0,0,0-1,1V9.2H7a.8.8,0,0,0,0,1.6h3v2.4H7a.8.8,0,0,0,0,1.6h3V31a1,1,0,0,0,2,0V20h7.57a8.45,8.45,0,0,0,7.89-5.2H31a.8.8,0,0,0,0-1.6ZM12,6h7.57a6.51,6.51,0,0,1,5.68,3.2H12Zm0,4.8H25.87a5.6,5.6,0,0,1,0,2.4H12ZM19.57,18H12V14.8H25.25A6.51,6.51,0,0,1,19.57,18Z" class="clr-i-outline clr-i-outline-path-1"></path> <rect x="0" y="0" width="36" height="23" fill-opacity="0"></rect> </g></svg>
                                    {item.inventory.invent_price}
                                    </div>
                                </div>
                                
                                
                                 <div className='flex flex-row bg-sky-400'>
                                    
                                    <PrimaryButton className=''>Add to Cart</PrimaryButton>
                                  <Wishlist className='row-sm center hover:underline'/>
                                 </div>

                            </div>
                            
                            );
                        })}
                        
                </div>
            </div>
           

         
   

    <Pagination resultList={props.products} />
 </MainMenuLayout>
     );
}
