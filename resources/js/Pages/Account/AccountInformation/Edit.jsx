import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import { useState } from 'react';
import Select from '@/Components/Select';

export default function AccountInformation(props) {

    const { data, setData, post, processing, errors, transform } = useForm(props.product);
    const [confirmDelete, setConfirmDelete] = useState(false);
  

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        if(fieldName == 'attachment'){
            setData(data=>({...data, [fieldName]: event.target.files[0]}));
        }else{
            setData(data=>({...data, [fieldName]: fieldValue}));
        }
    }

    const onSaveHandler = (event) => {
        event.preventDefault();

        if (props.product.prod_id > 0) {
            Inertia.put('/admin/products/' + props.product.prod_id, data, { forceFormData: true });
        } else {
            Inertia.post(route('products.store'), data, { forceFormData: true });
        }
    }

    const onCancelHandler = () => {
        Inertia.get(route('products.index'));
    }

    const doConfirmDelete = () => {
        setConfirmDelete(true);
    }

    const doDeleteHandler = () => {
        Inertia.delete('/admin/products/' + props.product.prod_id);
    }

    const closeModal = () => {
        setConfirmDelete(false);
    };




    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book Information</h2>}
        >
            <Head title="Account Information" />
            <div className="pt-10 ">
                <div className="bg-white shadow-sm">
                    <div className="p-14 text-gray-900">
                        <form className="mt-6 space-y-6" onSubmit={onSaveHandler}>
                            <div>
                                <div className="mt-6">
                                <div>
                                        <InputLabel for="category" value="Category"/>

                                        <Select id="category" className="mt-1 block w-full"
                                            name="prod_categ_id"                                            
                                            value={data.customerInfo.cust_firstname}
                                            handleChange={handleChange} 
                                            options={props.categoryList}
                                            placeholder="-- Select Category --"
                                            optionLabel="categ_category_name"
                                            optionValue="categ_id"
                                            required/>
                                        
                                    </div>
                                    <div className="text-red-500">{props.errors.prod_category}</div>
                                </div>
                                {/* <div className="mt-6">
                                    <InputLabel for="product_title" value="Book Title" />

                                    <TextInput id="product_title" className="mt-1 block w-full"
                                        name="prod_title"
                                        value={data.prod_title}
                                        handleChange={handleChange}
                                        required
                                    />
                                    <div className="text-red-500">{props.errors.prod_title}</div>
                                </div> */}
                            </div>
                            {/* <div>
                                <div className="mt-6">
                                    <InputLabel for="product_author" value="Book Author" />

                                    <TextInput id="product_author" className="mt-1 block w-full"
                                        name="prod_author"
                                        value={data.prod_author}
                                        handleChange={handleChange}
                                        required
                                    />
                                    <div className="text-red-500">{props.errors.prod_author}</div>
                                </div>
                                <div>

                                    <div className="mt-6">
                                        <InputLabel for="product_description" value="Book Description" />
                                        <textarea id="product_description" name="prod_description" className="mt-1 block w-full" onChange={handleChange} value={data.prod_description}>
                                           
                                        </textarea>
                                    </div>
                                </div>

                                <div>
                                <div className="grid">
                                    <InputLabel for="attachment" value="Attachment" />

                                    <TextInput id="attachment" className="mt-1 block w-full"
                                        type="file"
                                        name="attachment"
                                        handleChange={handleChange}
                                    />

                                    <div>{data.attachmentFile}</div>
                                </div>
                            </div>
                            </div>

                            <div className="flex items-center gap-4 py-4">
                                <DangerButton type='button' onClick={doConfirmDelete}>Delete</DangerButton>
                                <SecondaryButton type='button' onClick={onCancelHandler}>Cancel</SecondaryButton>
                                <PrimaryButton type='submit' disabled={processing} className="text-gray-600">Save</PrimaryButton>
                            </div>
                            <Modal show={confirmDelete} onClose={closeModal}>
                                <div className="p-6 text-gray-900">
                                    <h2 className="text-lg font-medium text-gray-900 text-center">
                                        Are you sure you want to delete this record?
                                    </h2>
                                    <div className="mt-6 flex justify-center">
                                        <SecondaryButton onClick={closeModal}>No</SecondaryButton>
                                        <DangerButton className="ml-3" processing={processing} onClick={doDeleteHandler}>
                                            Yes
                                        </DangerButton>
                                    </div>
                                </div>
                            </Modal> */}


                        </form>
                    </div>
                </div>
            </div>

            <div className="pt-12 pb-5">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">

                        <h7> Stats</h7>
                        <p>Information about this product</p>



                        <table className="">
                            <thead>
                                <tr className="text-left">
                                    <th className="pb-4 pt-6 px-6">Sales</th>
                                    <th className="pb-4 pt-6 px-6">No. of Orders</th>
                                    <th className="pb-4 pt-6 px-6">Stocks</th>
                                </tr>
                            </thead>

                            {/* <tbody>
                                    {props.products.map((item)=>{
                                        return (
                                            <tr className="text-left font-bold">
                                                <td className="border px-2 pl-2">{item.sales_total_amount</td>
                                                <td className="border px-2 pl-2">{item.ord_total_amount}</td>
                                                <td className="border px-2 pl-2">{item.created_at}</td> 
                                            </tr>
                                        );
                                    })}
                                </tbody> */}

                        </table>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}