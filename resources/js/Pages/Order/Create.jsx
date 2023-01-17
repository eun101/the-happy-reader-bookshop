import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import Select from '@/Components/Select';


export default function Order(props) {

const { data, setData, post, processing, errors, transform } = useForm(props.order);


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
    Inertia.post(route('place-order.store'), data, { forceFormData: true });
}

const onCancelHandler = () => {
    Inertia.get(route('place-order.index'));
}




   return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Order </h2>}
        >


            <Head title="New Order" />
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

                                <div className="mt-6">
                                    <div>
                                        <InputLabel for="product" value="Product" />

                                        {/* <Select id="category" className="mt-1 block w-full"
                                            name="prod_categ_id"
                                            handleChange={handleChange}
                                            // options={props.categoryList}
                                            placeholder="-- Select Category --"
                                            // optionLabel="categ_category_name"
                                            // optionValue="categ_id"
                                            required /> */}

                                    </div>
                                    <div className="text-red-500">{props.errors.prod_category}</div>
                                </div>
                                    <div>
                                        <div className="mt-6">
                                            <InputLabel for="order_list_quantity" value="Quantity" />

                                            <TextInput id="order_list_quantity" className="mt-1 block w-full"
                                                name="ordlist_quantity"
                                                handleChange={handleChange}
                                                required
                                            />
                                            <div className="text-red-500">{props.errors.prod_title}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-6">
                                            <InputLabel for="order_list_price" value="Price" />

                                            <TextInput id="order_list_price" className="mt-1 block w-full"
                                                name="ordlist_price"
                                                handleChange={handleChange}
                                                required
                                            />
                                            <div className="text-red-500">{props.errors.prod_author}</div>
                                        </div>
                                        <div>
                                            <div>

                                                <div className="mt-6">
                                                    <InputLabel for="order_list_total" value="Total Price" />
                                                    <TextInput id="order_list_total" className="mt-1 block w-full"
                                                        name="ordlist_total"
                                                        handleChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
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