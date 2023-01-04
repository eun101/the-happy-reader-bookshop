<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\User;
use App\Http\Requests\StoreSaleRequest;
use App\Http\Requests\UpdateSaleRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\OrderService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class SaleController extends Controller
{
    protected $modelService = null;
    
    public function __construct(IModelService $modelService){
        $this->modelService = $modelService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return Inertia::render('Sale/Index',[
            'sales'=>Sale::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Sale/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSaleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSaleRequest $request)
    {
        // $validatedData = $request->validated();
        // $recordData = new Sale();
        // $recordData->created_by = Auth::user()->id;
        // $recordData->ord_cust_id = $validatedData['ord_cust_id'];
        // $recordData->ord_delivery_address = $validatedData['ord_delivery_address'];
        // $recordData->ord_payment_method = $validatedData['ord_payment_method'];
        // $recordData->ord_amount = $validatedData['ord_amount'];
        // $recordData->ord_status = $validatedData['ord_status'];
        // $recordData->ord_paid = $validatedData['ord_paid'];
        // $recordData->save();

        // $attachment = $this->saveAttachmentFile($request);
        // if($attachment){
        //     $attachment->att_description = 'Order attachment file';
        //     $recordData->attachment()->save($attachment);
        // }

        // $this->setStatusSession('Order record '.$recordData->ord_cust_id.' has been added.');

        // return redirect('/sales');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSaleRequest  $request
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSaleRequest $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
