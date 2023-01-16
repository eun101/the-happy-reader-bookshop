<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\User;
use App\Http\Requests\StoreAddressRequest;
use App\Http\Requests\UpdateAddressRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\AddressService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Traits\ManageFileUpload;
use DB;

class AddressController extends Controller
{    
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


        return Inertia::render('Account/Address/Index', [
            'address'=> $resultList,
            'status'=>$status,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
        public function create(Address $address)
        {
            return Inertia::render('Account/Address/Create', [
                'address'=> $address,
                'addressList' => $address->getAddressList(),
            ]);
        }

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAddressRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAddressRequest $request)
    {
        $validatedData = $request->validated();

            $recordData = new Address();
            $recordData->created_by = Auth::user()->id;
            $recordData->addr_street_address = $validatedData['addr_street_address'];
            $recordData->addr_city = $validatedData['addr_city'];
            $recordData->addr_state_or_province = $validatedData['addr_state_or_province'];
            $recordData->addr_postal_code = $validatedData['addr_postal_code'];
            $recordData->addr_country = $validatedData['addr_country'];
            $recordData->save();

            // $recordData->billingAddress->cust_billing_address = $recordData->addr_id;
            // $recordData->shippingAddress->cust_shipping_address = $recordData->addr_id;


            $this->setStatusSession('Your address has been added.');
            return redirect('customer/account/address');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function show(Address $address)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAddressRequest  $request
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAddressRequest $request, Address $address)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function destroy(Address $address)
    {
        //
    }
}
