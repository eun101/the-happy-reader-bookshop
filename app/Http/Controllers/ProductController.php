<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use App\Models\Category;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\OrderService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


class ProductController extends Controller
{

    protected $modelService = null;
    
    public function __construct(IModelService $modelService){
        $this->modelService = $modelService;
        // $this->middleware('permission:product-list|product-create|product-edit|product-delete', ['only' => ['index','store']]);
        // $this->middleware('permission:product-create', ['only' => ['create','store']]);
        // $this->middleware('permission:product-edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:product-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $status = $this->getStatusSession($request);

        $resultList = $this->modelService->getList($request->all(), true);

        // \Log::info($resultList);

        return Inertia::render('Product/Index', [
            'products'=> $resultList,
            'status'=>$status,


        return Inertia::render('Product/Index',[
            'products'=>Product::get(),

        ]);

   
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

            $product = new Product();
    
            return Inertia::render('Product/Edit', [
                'product'=> $product,
                'categoryList'=> $product ->getCategoryList(),

            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {



        $validatedData = $request->validated();


        $recordData = new Product();
        $recordData->created_by = Auth::user()->id;
        $recordData->prod_categ_id = $validatedData['prod_categ_id'];
        $recordData->prod_title = $validatedData['prod_title'];
        $recordData->prod_author = $validatedData['prod_author'];
        $recordData->prod_description = $validatedData['prod_description'];
        $recordData->prod_status = $validatedData['prod_status'];
        $recordData->save();



        $attachment = $this->saveAttachmentFile($request);
        if($attachment){
            $attachment->att_description = 'Products attachment file';
            $recordData->attachment()->save($attachment);
        }


        $this->setStatusSession('Products record '.$recordData->prod_id.' has been added.');

        $this->setStatusSession('Product record '.$recordData->prod_id.' has been added.');


        return redirect('/products');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        // $product->invoiceDate = $product->invoiceDate;
        // $product->attachmentFile = $product->attachmentFile;

        // \Log::info($product);

        //  $product->invoiceDate = $product->invoiceDate;

        {
            // $invoice->invoiceDate = $invoice->invoiceDate;
            // $invoice->attachmentFile = $invoice->attachmentFile;
    
        //     return Inertia::render('Invoice/Edit', [
        //         'invoice'=> $invoice,
        //         'currencyList' => $invoice->getCurrencyList(),
        //         'statusList' => $invoice->getInvoiceStatusList(),
        //         'paymentMethodList' => $invoice->getInvoicePaymentMethodList(),
        //     ]);
        // }

        return Inertia::render('Product/', [
            'product'=> $product,
            'categoryList'=> $product ->getCategoryList(),
            
 

        ]);


     
    }
        }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $validatedData = $request->validated();

        $product->modified_by = Auth::user()->id;
        $recordData->prod_id = $validatedData['prod_id'];
        $recordData->prod_categ_id = $validatedData['prod_categ_id'];
        $recordData->prod_title = $validatedData['prod_title'];
        $recordData->prod_author = $validatedData['prod_author'];
        $recordData->prod_description = $validatedData['prod_description'];
        $recordData->prod_status = $validatedData['prod_status'];
        $recordData->save();

        $this->setStatusSession('Product record '.$recordData->prod_id.' has been added.');

        return redirect('/products');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}