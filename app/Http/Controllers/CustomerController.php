<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\User;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\CustomerService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CustomerController extends Controller
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
        

        return Inertia::render('Customer/Index', [
            'customers'=> $resultList,
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
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCustomerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCustomerRequest $request)
    {
        $validatedData = $request->validated();
        $recordData = new Customer();
        $recordData->created_by = Auth::user()->id;
        $recordData->cust_id = $validatedData['cust_id'];
        $recordData->cust_firstname = $validatedData['cust_firstname'];
        $recordData->cust_lastname = $validatedData['cust_lastname'];
        $recordData->cust_contact = $validatedData['cust_contact'];
        $recordData->cust_email = $validatedData['cust_email'];
        $recordData->cust_password = $validatedData['cust_password'];
        $recordData->cust_delivery_address = $validatedData['cust_delivery_address'];
        $recordData->save();

        $attachment = $this->saveAttachmentFile($request);
        if($attachment){
            $attachment->att_description = 'Customer attachment file';
            $recordData->attachment()->save($attachment);
        }

        $this->setStatusSession('Customer record '.$recordData->cust_id.' has been added.');

        return redirect('/customers');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCustomerRequest  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $validatedData = $request->validated();

        $customer->modified_by = Auth::user()->id;
        $recordData->cust_id = $validatedData['cust_id'];
        $recordData->cust_firstname = $validatedData['cust_firstname'];
        $recordData->cust_lastname = $validatedData['cust_lastname'];
        $recordData->cust_contact = $validatedData['cust_contact'];
        $recordData->cust_email = $validatedData['cust_email'];
        $recordData->cust_password = $validatedData['cust_password'];
        $recordData->cust_delivery_address = $validatedData['cust_delivery_address'];
        $recordData->save();

        $this->setStatusSession('Customer record '.$recordData->cust_id.' has been added.');

        return redirect('/customers');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        
    }
}
