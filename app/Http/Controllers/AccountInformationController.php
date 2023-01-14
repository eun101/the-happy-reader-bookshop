<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Customer;
use App\Http\Requests\StoreAccountInformationRequest;
use App\Http\Requests\UpdateAccountInformationRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\AccountInformationService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use DB;

class AccountInformationController extends Controller
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

        

        return Inertia::render('Account/AccountInformation/Index', [
            'accountInfo'=> $resultList,
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
     * @param  \App\Http\Requests\StoreAccountInformationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAccountInformationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AccountInformation  $accountInformation
     * @return \Illuminate\Http\Response
     */
    public function show(AccountInformation $accountInformation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AccountInformation  $accountInformation
     * @return \Illuminate\Http\Response
     */
    public function edit(AccountInformation $accountInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAccountInformationRequest  $request
     * @param  \App\Models\AccountInformation  $accountInformation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAccountInformationRequest $request, AccountInformation $accountInformation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AccountInformation  $accountInformation
     * @return \Illuminate\Http\Response
     */
    public function destroy(AccountInformation $accountInformation)
    {
        //
    }
}
