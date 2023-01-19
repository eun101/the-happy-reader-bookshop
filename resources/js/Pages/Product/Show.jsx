import MutedButton from '@/Components/MutedButton';
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

            <div className="py-0 bg-emerald-50">
                <div className="p-6 text-gray-900">
                    <div className='row flex justify-end'>
                        <div className="col-sm-2 pt-12">
                            <input type="text" className="form-control" name="keyword" placeholder="" onKeyUp={handleChange}/>
                        </div>  
                        <div className="col-sm-2 pl-12 pt-12">
                            <MutedButton type='button' onClick={doSearchHandler}>Search</MutedButton>
                        </div>
                    </div>
                </div>
            </div>      

            <div className='col-start-1 col-end-2 p-4 mx-auto bg-emerald-50'>
            <Link href={'/product-list'}>
            <h1 className='col-start-1 col-end-2 p-4 mx-auto'>Shop</h1>
            </Link>
            </div>


            <div class="p-5 bg-emerald-50 ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 ">
                    {props.products.data.map((item) => {
                        return (
                            <div class=" bg-white-400 rounded-md mx-auto box-border bg-white p-4 border-4">
                                <div className='rounded-full pb-3'>
                                <S3Image imagePath={item.attachment.att_storage_path} />
                                </div>
                                    <div className="text-center px-3">
                                    <div className=''>{item.prod_author}
                                    <EllipsisText text= {item.prod_title} style ={{whiteSpace: 'pre-wrap', overflowWrap: 'break -word'}}/>
                                    </div>
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
