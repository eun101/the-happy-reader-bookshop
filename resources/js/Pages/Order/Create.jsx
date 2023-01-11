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

export default function Order(props) {

    const { data, setData, post, processing, errors, transform } = useForm(props.order);
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

    }

    const onSaveHandler = (event) => {
        event.preventDefault();
        Inertia.post(route('order.store'), data, { forceFormData: true });


    }

    const onCancelHandler = () => {
        Inertia.get(route('order.index'));
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Order </h2>}
        >


            <Head title="Orders" />
            <div className="pt-10 ">
                <div className="bg-white shadow-sm">
                    <div className="p-14 text-gray-900">
                        <form className="mt-6 space-y-6" onSubmit={onSaveHandler}>
                            <div>
                            </div>
                            <div className="mt-6">
                                    {/* <div>
                                        <InputLabel for="product" value="Book" />

                                        <Select id="category" className="mt-1 block w-full"
                                            name="prod_categ_id"
                                            value={data.prod_categ_id}
                                            handleChange={handleChange}
                                            options={props.categoryList}
                                            placeholder="-- Select Category --"
                                            optionLabel="categ_category_name"
                                            optionValue="categ_id"
                                            required />

                                    </div> */}
                                    <div>
                                        <div className="mt-6">
                                            <InputLabel for="customer_firstname" value="First Name" />

                                            <TextInput id="customer_firstname" className="mt-1 block w-full"
                                                name="cust_firstname"
                                                value={data.cust_firstname}
                                                handleChange={handleChange}
                                                required
                                            />
                                            <div className="text-red-500">{props.errors.prod_title}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-6">
                                            <InputLabel for="customer_lastname" value="Last Name" />

                                            <TextInput id="customer_lastname" className="mt-1 block w-full"
                                                name="cust_lastname"
                                                value={data.cust_lastname}
                                                handleChange={handleChange}
                                                required
                                            />
                                            <div className="text-red-500">{props.errors.prod_author}</div>
                                        </div>
                                        <div>
                                            <div>

                                                <div className="mt-6">
                                                    <InputLabel for="customer_contact" value="Contact Number" />
                                                    <TextInput id="customer_contact" className="mt-1 block w-full"
                                                        name="cust_contact"
                                                        handleChange={handleChange}
                                                        value={data.cust_contact}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <InputLabel for="customer_email" value="Email Address" />
                                        <TextInput id="customer_email" className="mt-1 block w-full"
                                            name="cust_email"
                                            handleChange={handleChange}
                                            value={data.cust_email}
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <InputLabel for="customer_password" value="Password" />
                                        <TextInput id="customer_password" className="mt-1 block w-full"
                                            name="cust_password"
                                            handleChange={handleChange}
                                            value={data.cust_password}
                                        />
                                    </div>





                                    <div className="flex items-center gap-4 py-4">
                                        <SecondaryButton type='button' onClick={onCancelHandler}>Cancel</SecondaryButton>
                                        <PrimaryButton type='submit' disabled={processing} className="text-gray-600">Save</PrimaryButton>
                                    </div>

                                    </div>


                        </form>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>

    );
}