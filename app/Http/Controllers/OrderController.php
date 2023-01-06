<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\OrderService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


class OrderController extends Controller
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


  return Inertia::render('Order/Index',[
        'orders'=>Order::get(),

    // $status = $this->getStatusSession($request);


    // $resultList = $this->modelService->getList($request->all(), true);


    // \Log::info($resultList);

    return Inertia::render('Order/Index', [
        'orders'=> $resultList,
        'status'=>$status,
    ]);

    // return Inertia::render('Order/Index', [
    //     'orders'=> $resultList,
    //     'status'=>$status,
    // ]);




// ($users);

    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Orders/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {
        $validatedData = $request->validated();
        $recordData = new Order();
        $recordData->created_by = Auth::user()->id;
        $recordData->ord_cust_id = $validatedData['ord_cust_id'];
        $recordData->ord_delivery_address = $validatedData['ord_delivery_address'];
        $recordData->ord_payment_method = $validatedData['ord_payment_method'];
        $recordData->ord_amount = $validatedData['ord_amount'];
        $recordData->ord_status = $validatedData['ord_status'];
        $recordData->ord_paid = $validatedData['ord_paid'];
        $recordData->save();

        $attachment = $this->saveAttachmentFile($request);
        if($attachment){
            $attachment->att_description = 'Order attachment file';
            $recordData->attachment()->save($attachment);
        }

        $this->setStatusSession('Order record '.$recordData->ord_cust_id.' has been added.');

        return redirect('/orders');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        $order->orderDate = $order->orderDate;
        $order->attachmentFile = $order->attachmentFile;

        return Inertia::render('Order/Edit', [
            'order'=> $order,
           
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        
        $validatedData = $request->validated();

        $invoice->modified_by = Auth::user()->id;
        $recordData->ord_cust_id = $validatedData['ord_cust_id'];
        $recordData->ord_delivery_address = $validatedData['ord_delivery_address'];
        $recordData->ord_payment_method = $validatedData['ord_payment_method'];
        $recordData->ord_amount = $validatedData['ord_amount'];
        $recordData->ord_status = $validatedData['ord_status'];
        $recordData->ord_paid = $validatedData['ord_paid'];
        $recordData->save();

        $this->setStatusSession('Order record '.$recordData->ord_cust_id.' has been added.');

        return redirect('/orders');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        $ordCustomer = $order->ord_cust_id;
        $order->delete();

        $this->setStatusSession('Order record '.$ord_cust_id.' has been deleted.');

        return redirect('/orders');
    }
}
