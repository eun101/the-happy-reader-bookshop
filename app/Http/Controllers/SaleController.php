<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\User;
use App\Http\Requests\StoreSaleRequest;
use App\Http\Requests\UpdateSaleRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\SaleService as IModelService;
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
    public function index(Request $request)
    {

        $status = $this->getStatusSession($request);

        $resultList = $this->modelService->getList($request->all(), true);

 
        return Inertia::render('Sale/Index', [
            'sales'=> $resultList,
            'status'=>$status,
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
        $validatedData = $request->validated();
        $recordData = new Sale();
        $recordData->created_by = Auth::user()->id;
        $recordData->sales_order_id = $validatedData['sales_order_id'];
        $recordData->sales_total_amount = $validatedData['sales_total_amount'];
        $recordData->save();

        $attachment = $this->saveAttachmentFile($request);
        if($attachment){
            $attachment->att_description = 'Sale attachment file';
            $recordData->attachment()->save($attachment);
        }

        $this->setStatusSession('Sale record '.$recordData->sales_order_id.' has been added.');

        return redirect('/sales');
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
        $validatedData = $request->validated();

        $sale->modified_by = Auth::user()->id;
        $recordData->sales_order_id = $validatedData['sales_order_id'];
        $recordData->sales_total_amount = $validatedData['sales_total_amount'];
        $recordData->save();

        $this->setStatusSession('Sale record '.$recordData->sales_order_id.' has been added.');

        return redirect('/sales');
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
