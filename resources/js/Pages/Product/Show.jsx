import MutedButton from '@/Components/MutedButton';
import MainMenuLayout from '@/Layouts/MainMenuLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { filter, get } from 'lodash';
import { useEffect, useState } from 'react';
import Pagination from '@/Components/Pagination';
import S3Image from '@/Components/S3Image';
import Footer from '@/Components/Footer';
import InputLabel from '@/Components/InputLabel';
import Select from '@/Components/Select';



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

            <div className="py-0 bg-emerald-50">
                <div className="p-6 text-gray-900">
                    <div className='row flex justify-end'>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" name="keyword" placeholder="" onKeyUp={handleChange}/>
                        </div>  
                        <div className="col-sm-1">
                            <MutedButton type='button' onClick={doSearchHandler}>Search</MutedButton>
                        </div>
                    </div>
                </div>
            </div>      
            <form>
                {/* <div>
                    <InputLabel for="category" value="Category" />
                    <Select id="category" className="mt-1 block w-full"
                        name="prod_categ_id"
                        handleChange={handleChange}
                        options={props.categoryList}
                        placeholder="-- Select Category --"
                        optionLabel="categ_category_name"
                        optionValue="categ_id"
                        required />
                </div> */}
            </form>

           

            <div className='col-start-1 col-end-2 p-4 mx-auto bg-emerald-50'>
                                <h1 className='col-start-1 col-end-2 p-4 mx-auto'>Shop</h1>
                            </div>
            {props.products.data.map((item) => {
                return (
                <div className='bg-emerald-50 flex justify-center'>
                    <div className='py-11 row grid grid-cols-3 gap-4'>
                        <div className="col-sm-3 ">
                            <div className="box-border h-80 w-60 p-4 border-4 bg-white">
                                <S3Image imagePath={item.attachment.att_storage_path} />
                                <div className="text-center mt-2 mb-2  font-bold">{item.prod_title}</div>                            
                                <div className='text-center'>{item.prod_author}</div>
                            </div>
                        </div>
                            <div className="col-sm-3">
                                <div className="box-border h-80 w-60 p-4 border-4 bg-white">
                                    <S3Image imagePath={item.attachment.att_storage_path} />
                                    <div className="text-center mt-2 mb-2  font-bold">{item.prod_title}</div>                            
                                    <div className='text-center'>{item.prod_author}</div>
                                </div>
                            </div>
                        <div className="col-sm-3">
                            <div className="box-border h-80 w-60 p-4 border-4 bg-white">
                                <S3Image imagePath={item.attachment.att_storage_path} />
                                <div className="text-center mt-2 mb-2  font-bold">{item.prod_title}</div>                            
                                <div className='text-center'>{item.prod_author}</div>
                            </div>
                        </div>
                            <div className="col-sm-2">
                                <div className="box-border h-80 w-60 p-4 border-4 bg-white">
                                <S3Image imagePath={item.attachment.att_storage_path} />
                                <div className="text-center mt-2 mb-2  font-bold">{item.prod_title}</div>                            
                                <div className='text-center'>{item.prod_author}</div>
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
