<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Customer;
use App\Models\User;
Use Carbon\Carbon;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\OrderService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Traits\DropdownListOptions;


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
    $resultList = $this->modelService->getList($request->all(), true);

    $totalOrder = Order::count();

    $todayDate = Carbon::now()->format('d-m-Y');
    $mothDate = Carbon::now()->format('m');
    $YearDate = Carbon::now()->format('Y');
    

    $todayOrder = Order::whereDate('created_at', $todayDate)->count();
    $monthOrder = Order::whereMonth('created_at', $mothDate)->count();
    $yearOrder = Order::whereYear('created_at', $YearDate)->count();



    return Inertia::render('Order/Index', [
        'orders'=> $resultList,'status'=>$status,'totalOrder'=>$totalOrder,
        'todayOrder'=>$todayOrder,'monthOrder'=>$monthOrder,
        'yearOrder'=>$yearOrder,
        // 'statusList'=> $request -> getDeliveryStatusList(),
    ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Order $order)
    {
        return Inertia::render('Order/Create', [
            'order'=> $order,
            // 'categoryList'=> $order ->getCategoryList(),
        ]);
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

        return redirect('admin/orders');
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

        $order->modified_by = Auth::user()->id;
        $recordData->ord_cust_id = $validatedData['ord_cust_id'];
        $recordData->ord_delivery_address = $validatedData['ord_delivery_address'];
        $recordData->ord_payment_method = $validatedData['ord_payment_method'];
        $recordData->ord_amount = $validatedData['ord_amount'];
        $recordData->ord_status = $validatedData['ord_status'];
        $recordData->ord_paid = $validatedData['ord_paid'];
        $recordData->save();

        $this->setStatusSession('Order record '.$recordData->ord_cust_id.' has been added.');

        return redirect('admin/orders');
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
    
    public function customerOrderInformation(){
        $customerOrderInformation = $this->modelService->getOrderByUserID(Auth::user()->id);
 
        \Log::info($customerOrderInformation);
        
        return Inertia::render('Account/MyOrder/Index', [
         'customerOrderInformation'=> $customerOrderInformation,
     ]);
 
     }
  

}
