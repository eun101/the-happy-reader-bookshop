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

export default function Product(props) {

    const { data, setData, post, processing, errors, transform } = useForm(props.product);
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        if (fieldName == 'attachment') {
            setData(data => ({ ...data, [fieldName]: event.target.files[0] }));
        } else {
            setData(data => ({ ...data, [fieldName]: fieldValue }));
        }



    }

    const onSaveHandler = (event) => {
        event.preventDefault();
        Inertia.post(route('products.store'), data, { forceFormData: true });
      

    }

    const onCancelHandler = () => {
        Inertia.get(route('products.index'));
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalClose(true)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };



    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Book</h2>}
        >


            <Head title="Products" />
            <div className="pt-10 ">
                <div className="bg-white shadow-sm">
                    <div className="p-14 text-gray-900">
                        <form className="mt-6 space-y-6" onSubmit={onSaveHandler}>
                            <div>
                                <div className="mt-6">
                                    <div>
                                        <InputLabel for="category" value="Category" />

                                        <Select id="category" className="mt-1 block w-full"
                                            name="prod_categ_id"
                                            value={data.prod_categ_id}
                                            handleChange={handleChange}
                                            options={props.categoryList}
                                            placeholder="-- Select Category --"
                                            optionLabel="categ_category_name"
                                            optionValue="categ_id"
                                            required />

                                    </div>
                                    <div className="text-red-500">{props.errors.prod_category}</div>
                                </div>
                                <div className="mt-6">
                                    <InputLabel for="product_title" value="Book Title" />

                                    <TextInput id="product_title" className="mt-1 block w-full"
                                        name="prod_title"
                                        value={data.prod_title}
                                        handleChange={handleChange}
                                        required
                                    />
                                    <div className="text-red-500">{props.errors.prod_title}</div>
                                </div>
                            </div>

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
                                    <textarea id="prod_description" name="prod_description" className="mt-1 block w-full" onChange={handleChange}>
                                        {data.prod_description}
                                    </textarea>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <div className="mt-6">
                                    <InputLabel for="stocks" value="Stocks" />
                                    <TextInput type="number" id="invent_quantity" value={data.invent_quantity} name="invent_quantity" className="mt-1 block w-full" handleChange={handleChange}/>
                                </div>
                            </div>
                            <div>
                                <div className="mt-6">
                                    <InputLabel for="price" value="Price" />
                                    <TextInput  data-type="currency" min="0" max="10000" step="0.01" id="invent_price" value={data.invent_price} name="invent_price" className="mt-1 block w-full" handleChange={handleChange}/>
                                </div>
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

                            <div className="flex items-center gap-4 py-4">
                                <SecondaryButton type='button' onClick={onCancelHandler}>Cancel</SecondaryButton>
                                <PrimaryButton type='submit' disabled={processing} className="text-gray-600">Save</PrimaryButton>
                            </div>



                        </form>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>

    );
}