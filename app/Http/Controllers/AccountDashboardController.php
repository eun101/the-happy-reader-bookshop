<?php

namespace App\Http\Controllers;

use App\Models\AccountDashboard;
use App\Http\Requests\StoreAccountDashboardRequest;
use App\Http\Requests\UpdateAccountDashboardRequest;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\AccountDashboardService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use DB;

class AccountDashboardController extends Controller
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
        {
            $status = $this->getStatusSession($request);
    
            $resultList = $this->modelService->getList($request->all(), true);
    
    
            return Inertia::render('Account/AccountDashboard/Index', [
                'address'=> $resultList,
                'status'=>$status,
            ]);
        }
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
     * @param  \App\Http\Requests\StoreAccountDashboardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAccountDashboardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AccountDashboard  $accountDashboard
     * @return \Illuminate\Http\Response
     */
    public function show(AccountDashboard $accountDashboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AccountDashboard  $accountDashboard
     * @return \Illuminate\Http\Response
     */
    public function edit(AccountDashboard $accountDashboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAccountDashboardRequest  $request
     * @param  \App\Models\AccountDashboard  $accountDashboard
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAccountDashboardRequest $request, AccountDashboard $accountDashboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AccountDashboard  $accountDashboard
     * @return \Illuminate\Http\Response
     */
    public function destroy(AccountDashboard $accountDashboard)
    {
        //
    }
}
