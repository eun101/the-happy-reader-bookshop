<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use App\Models\Inventory;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ProductService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Traits\ManageFileUpload;
use DB;

class ProductController extends Controller
{

    use ManageFileUpload;


    protected $modelService = null;
    
    public function __construct(IModelService $modelService){
        $this->modelService = $modelService;
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
        // dd($resultList);
        // \Log::info($resultList);

        return Inertia::render('Product/Index', [
            'products'=> $resultList,
            'status'=>$status,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Product $product)
    {
        return Inertia::render('Product/Create', [
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

        DB::beginTransaction();
        try {
            $recordData = new Product();
            $recordData->created_by = Auth::user()->id;
            $recordData->prod_categ_id = $validatedData['prod_categ_id'];
            $recordData->prod_title = $validatedData['prod_title'];
            $recordData->prod_author = $validatedData['prod_author'];
            $recordData->prod_description = $validatedData['prod_description'];
            $recordData->save();
 
            $attachment = $this->saveAttachmentFile($request);
            if($attachment){
                $attachment->att_description = 'Products attachment file';
                $recordData->attachment()->save($attachment);
            }
            
            $recordData->inventory->invent_prod_id = $recordData->prod_id;
            $recordData->inventory->invent_quantity = $validatedData['invent_quantity'];
            $recordData->inventory->invent_price = $validatedData['invent_price'];
            $recordData->inventory->created_by = $recordData->created_by;
            $recordData->inventory->save();
            DB::commit();   
            $this->setStatusSession(''.$recordData->prod_title.'  has been added.');
            return redirect('admin/products');

        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $status = $this->getStatusSession($request);

        $resultList = $this->modelService->getList($request->all(), true);

        \Log::info($resultList);

        return Inertia::render('Product/Show', [
            'products'=> $resultList,
            'status'=>$status,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $product->attachmentFile = $product->attachmentFile;

        return Inertia::render('Product/Edit', [
            'product'=> $product,
            'categoryList'=> $product ->getCategoryList(),
            

        ]);

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

            \Log::info($request->all());
            
        $validatedData = $request->validated();
        $recordData = $product;

      
        $recordData->created_by = Auth::user()->id;
        $recordData->prod_categ_id = $validatedData['prod_categ_id'];
        $recordData->prod_title = $validatedData['prod_title'];
        $recordData->prod_author = $validatedData['prod_author'];
        $recordData->prod_description = $validatedData['prod_description'];
        $recordData->save();



        $this->setStatusSession(''.$recordData->prod_title.'  has been updated.');

        return redirect('admin/products');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $prod = $product->prod_title;
        $product->delete();

        $this->setStatusSession('Invoice record '.$prod.' has been deleted.');

        return redirect('/admin/products');
    }

    public function productInfo(){
        $customerInfo = $this->modelService->getProductList();
     //    \Log::info($customerInfo);   
        return Inertia::render('Welcome/Show', [
         'customerInfo'=> $productInfo,
     ]);
     
     }
 
}