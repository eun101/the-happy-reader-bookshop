import PrimaryButton from '@/Components/PrimaryButton';
import MutedButton from '@/Components/MutedButton';
import DangerButton from '@/Components/DangerButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';
import Modal from '@/Components/Modal';
import S3Image from '@/Components/S3Image';
import LinesEllipsis from 'react-lines-ellipsis'


const onAddHandler = ()=>{
    Inertia.get(route('products.create'));
}

export default function Product(props) {

    const [filters, setFilters] = useState();
    const [show, setShow] = useState(false);


    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setFilters(values=>({...values, [fieldName]: fieldValue}));

    }

    const doSearchHandler = (event) =>{

        Inertia.get(route(route().current()),filters,
        {
            preserveState: true,
            replace: true,
        }); 

    }

    const onCancelHandler = () => {
        Inertia.get(route('products.index'));
    }

    // const openModal =() => {
    //     setIsOpen(true);
    // }

    // const closeModal = () => {
    //     setIsOpen(false);
    // }

    // const handleClose = () => setShow(false);
    // const handleShow = () => {
    //     setShow(true);
    //      Inertia.get(route('products.create'));
    // };





    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2>Product</h2>}
        >
            <Head title="Product" />
        
            <div className="flex flex-row-reverse rounded-full px-3 py-12">
                <PrimaryButton type='button'
                onClick={onAddHandler} >Add New Product</PrimaryButton>
                <div>{props.status}</div>
            </div>
          
   
                <div className="py-0">
                    
                    <div className="p-6 text-gray-900">
                        <div className='row'>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="keyword" placeholder="Search by Title and Author" onKeyUp={handleChange}/>
                            </div>  
                            <div className="col-sm-1">
                                <MutedButton type='button' onClick={doSearchHandler}>Search</MutedButton>
                            </div>
                        </div>
                    </div>
                
                
                </div>
                 {/* <Modal show={show} onClose={handleClose}> 
                 <div>
                    Hi
                 </div>
                   </Modal> */}

                
      
       
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-7 text-gray-900">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                <tr className="text-left font-bold">
                                <th className="text-center pb-4 pt-6 px-6"> BOOK COVER</th>
                                    <th className="text-center pb-4 pt-6 px-6"> BOOK TITLE</th>
                                    <th className="text-center pb-4 pt-6 px-6">AUTHOR</th>
                                    <th className="text-center pb-4 pt-6 px-6">ADDED DATE</th>
                                    <th className="text-center pb-4 pt-6 px-6">SALES</th>
                                    <th className="text-center pb-4 pt-6 px-6"># OF ORDERS</th>
                                    <th className="text-center pb-4 pt-6 px-6">STOCKS</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.products.data.map((item)=>{
                                        return (
                                            <tr className="text-left border px-4 py-2">
                                                    <td className="pb-4 pt-6 px-6 w-2/3"><S3Image imagePath={item.attachment.att_storage_path}/></td>
                                                <td className="pb-4 pt-3 px-11 font-mono">
                                                    <Link href={`/admin/products/${item.prod_id}/edit`} className="flex items-center px-6 py-2 focus:text-indigo-500 no-underline text-gray-900">
                                                     {item.prod_title} 
                                                    </Link>
                                                </td>
                                              
                                                <td className="pb-4 pt-6 px-6">{item.prod_author}</td>
                                                <td className="pb-4 pt-6 px-6">{item.created_at}</td>
                                              
                                                <td className="text-center pb-4 pt-6 px-6">{item.order.ord_cust_id}</td>
                                                <td className="pb-4 pt-6 px-6">{item.quantity.invent_quantity}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                         

                            <Pagination resultList={props.products}/>
                        </div>
                    </div>
                </div>
            </div>



           
           
            
            
        </AuthenticatedLayout>
    );
}
