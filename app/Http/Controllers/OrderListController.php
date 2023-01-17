<?php

namespace App\Http\Controllers;

use App\Models\OrderList;
use App\Http\Requests\StoreOrderListRequest;
use App\Http\Requests\UpdateOrderListRequest;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ProductService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use DB;


class OrderListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Orderlist $orderlist)
    {

        return Inertia::render('Order/Create',[
        'orderlist' => $orderlist,
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderListRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderListRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderList  $orderList
     * @return \Illuminate\Http\Response
     */
    public function show(OrderList $orderList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderList  $orderList
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderList $orderList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderListRequest  $request
     * @param  \App\Models\OrderList  $orderList
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderListRequest $request, OrderList $orderList)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderList  $orderList
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderList $orderList)
    {
        //
    }
}
