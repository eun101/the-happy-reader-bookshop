<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\User;
use App\Http\Requests\StoreInventoryRequest;
use App\Http\Requests\UpdateInventoryRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\OrderService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class InventoryController extends Controller
{
    protected $modelService = null;
    
    public function __construct(IModelService $modelService){
        $this->modelService = $modelService;
        // $this->middleware('permission:inventory-list|inventory-create|inventory-edit|inventory-delete', ['only' => ['index','store']]);
        // $this->middleware('permission:inventory-create', ['only' => ['create','store']]);
        // $this->middleware('permission:inventory-edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:inventory-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Inventory/Index',[
            'inventories'=>Inventory::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Inventory/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreInventoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInventoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function show(Inventory $inventory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function edit(Inventory $inventory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInventoryRequest  $request
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInventoryRequest $request, Inventory $inventory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inventory $inventory)
    {
        //
    }
}
