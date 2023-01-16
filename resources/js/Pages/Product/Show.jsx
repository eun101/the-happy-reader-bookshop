import PrimaryButton from '@/Components/PrimaryButton';
import MainMenuLayout from '@/Layouts/MainMenuLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';
import S3Image from '@/Components/S3Image';



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


            <div className='col-start-1 col-end-2 p-4 mx-auto'>
                                <h1 className='col-start-1 col-end-2 p-4 mx-auto'>Shop</h1>
                            </div>
            {props.products.data.map((item) => {
                return (
                    <div className="container-fluid mx-auto">
                        <div className='grid grid-cols-12 gap-4'>
                       
                            <div className='col-start-3 col-end-13'>
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" />
                                        <div className="relative  overflow-hidden">
                                            <S3Image imagePath={item.attachment.att_storage_path} />
                                        </div>
                                        <div className="p-4 text-center">
                                            <h6 className="mt-2 mb-2  font-bold">{item.prod_title}</h6>
                                            <p>{item.prod_author}</p>
                                            <div className="mt-3 flex justify-center">
                                                <span className="text-xl font-semibold">&#8369;</span>&nbsp;<span className="font-bold text-xl">{item.prod_price}</span>

                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                        </div>
                                    </div>
                                    </div>
                                    );
            })}
                                    <Pagination resultList={props.products} />




                                </MainMenuLayout>
                                );
}
