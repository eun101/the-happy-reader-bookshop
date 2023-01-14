<?php

namespace App\Http\Controllers;

use App\Models\MyOrder;
use App\Http\Requests\StoreMyOrderRequest;
use App\Http\Requests\UpdateMyOrderRequest;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\MyOrderService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use DB;

class MyOrderController extends Controller
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


        return Inertia::render('Account/MyOrder/Index', [
            'myOrder'=> $resultList,
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMyOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMyOrderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MyOrder  $myOrder
     * @return \Illuminate\Http\Response
     */
    public function show(MyOrder $myOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MyOrder  $myOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(MyOrder $myOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMyOrderRequest  $request
     * @param  \App\Models\MyOrder  $myOrder
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMyOrderRequest $request, MyOrder $myOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MyOrder  $myOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(MyOrder $myOrder)
    {
        //
    }
}
