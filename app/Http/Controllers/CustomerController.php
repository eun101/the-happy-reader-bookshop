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
        // $this->middleware('permission:customers-create', ['only' => ['create','store']]);
        // $this->middleware('permission:customers-edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:customers-delete', ['only' => ['destroy']]);
        // $this->middleware(['role_or_permission:super-admin|edit customers']);
        // $this->middleware(['role:super-admin','permission:create customers|edit customers']);
       
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
    public function create(Customer $customer)
    {

        return Inertia::render('Customer/Create',[
        'customer' => $customer,
        ]);
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
        $recordData->cust_user_id = Auth::user()->id;
        $recordData->cust_firstname = $validatedData['cust_firstname'];
        $recordData->cust_lastname = $validatedData['cust_lastname'];
        $recordData->cust_contact = $validatedData['cust_contact'];
        $recordData->cust_email = $validatedData['cust_email'];
        $recordData->cust_password = $validatedData['cust_password'];
        $recordData->cust_delivery_address = $validatedData['cust_delivery_address'];
        $recordData->save();


        $this->setStatusSession(''.$recordData->cust_firstname.'  has been added.');

        return redirect('admin/customers');
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

        return Inertia::render('Customer/Edit', [
            'customer'=> $customer,
           
        ]);
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
        $recordData = new Customer();
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

    public function customerInfo(){
       $customerInfo = $this->modelService->getCustomerByUserID(Auth::user()->id);

    //    \Log::info($customerInfo);
       
       return Inertia::render('Account/AccountInformation/Index', [
        'customerInfo'=> $customerInfo,
    ]);

    // public function addressInfo(){
    //     $addressInfo = $this->modelService->getCustomerByUserID(Auth::user()->id);
 
    //     \Log::info($addressInfo);
        
    //     return Inertia::render('Account/Address/Index', [
    //      'addressInfo'=> $addressInfo,
    //  ]);

    }

    public function customerDashboard(){
        $customerDashboard = $this->modelService->getCustomerByUserID(Auth::user()->id);
 
        // \Log::info($customerDashboard);
        
        return Inertia::render('Account/AccountDashboard/Index', [
         'customerDashboard'=> $customerDashboard,
     ]);
 
     }
    
    
}
