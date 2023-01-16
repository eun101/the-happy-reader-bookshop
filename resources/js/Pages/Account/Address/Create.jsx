import React from 'react';
import AuthenticatedLayoutCustomers from '@/Layouts/AuthenticatedLayoutCustomers';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import Select from '@/Components/Select';

export default function Address(props) {

const { data, setData, post, processing, errors, transform } = useForm(props.address);


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
    Inertia.post(route('address.store'), data, { forceFormData: true });
}

const onCancelHandler = () => {
    Inertia.get(route('address.index'));
}




   return (

        <AuthenticatedLayoutCustomers
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight mx-auto">New Address </h2>}
        >


            <Head title="Customers" />
            <div className="pt-10 ">
                <div className="bg-white shadow-sm">
                    <div className="p-14 text-gray-900">
                        <form className="mt-6 space-y-6" onSubmit={onSaveHandler}>
                            <div className="mt-6">

                                {/* <div>
                                            <TextInput type="hidden" value="{props.address.cust_id}" />

                                        </div> */}
                                <div>
                                        <InputLabel for="address" value="Address" />

                                        <Select id="address" className="mt-1 block w-full"
                                            name="address_type"
                                            handleChange={handleChange}
                                            options={props.addressList}
                                            placeholder="-- Select Category --"
                                            optionLabel="opti_name"
                                            optionValue="opti_id"
                                            required />

                                    </div>


                                
                                    <div>
                                        <div className="mt-6">
                                            <InputLabel for="street_address" value="Street Address" />

                                            <TextInput id="street_address" className="mt-1 block w-full"
                                                name="addr_street_address"
                                                handleChange={handleChange}
                                                required
                                            />
                                            <div className="text-red-500">{props.errors.addr_street_address}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-6">
                                            <InputLabel for="city" value="City" />

                                            <TextInput id="city" className="mt-1 block w-full"
                                                name="addr_city"
                                                handleChange={handleChange}
                                                required
                                            />
                                            <div className="text-red-500">{props.errors.addr_city}</div>
                                        </div>
                                        <div>
                                            <div>

                                                <div className="mt-6">
                                                    <InputLabel for="state_province" value="State/Province" />
                                                    <TextInput id="state_province" className="mt-1 block w-full"
                                                        name="addr_state_or_province"
                                                        handleChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-red-500">{props.errors.addr_state_or_province}</div>

                                    <div className="mt-6">
                                        <InputLabel for="postal_code" value="Postal Code/Zip Code" />
                                        <TextInput type="text" id="postal_code" className="mt-1 block w-full"
                                            name="addr_postal_code"
                                            handleChange={handleChange}
                                        />
                                    </div>
                                    <div className="text-red-500">{props.errors.addr_postal_code}</div>

                                    <div className="mt-6">
                                        <InputLabel for="country" value="Country" />
                                        <TextInput id="country" className="mt-1 block w-full"
                                            name="addr_country"
                                            handleChange={handleChange}
                                            value={data.addr_country}
                                        />
                                    </div>
                                    <div className="text-red-500">{props.errors.addr_country}</div>





                                    <div className="flex items-center gap-4 py-4">
                                        <SecondaryButton type='button' onClick={onCancelHandler}>Cancel</SecondaryButton>
                                        <PrimaryButton type='submit' disabled={processing} className="text-gray-600">Save</PrimaryButton>
                                    </div>

                                    </div>


                        </form>
                    </div>
                </div>
            </div>



        </AuthenticatedLayoutCustomers>

    );
}