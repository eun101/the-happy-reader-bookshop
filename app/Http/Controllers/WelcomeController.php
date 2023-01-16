<?php

namespace App\Http\Controllers;

use App\Models\Welcome;
use App\Http\Requests\StoreWelcomeRequest;
use App\Http\Requests\UpdateWelcomeRequest;
use App\Models\Sale;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\WelcomeService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class WelcomeController extends Controller

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
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreWelcomeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWelcomeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Welcome  $welcome
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $status = $this->getStatusSession($request);

        $resultList = $this->modelService->getList($request->all(), true);

        \Log::info($request);

        return Inertia::render('Welcome/Show', [
            'welcome'=> $resultList,
            'status'=>$status,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Welcome  $welcome
     * @return \Illuminate\Http\Response
     */
    public function edit(Welcome $welcome)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWelcomeRequest  $request
     * @param  \App\Models\Welcome  $welcome
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWelcomeRequest $request, Welcome $welcome)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Welcome  $welcome
     * @return \Illuminate\Http\Response
     */
    public function destroy(Welcome $welcome)
    {
        //
    }
}
