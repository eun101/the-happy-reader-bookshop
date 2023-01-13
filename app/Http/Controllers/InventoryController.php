<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\User;
use App\Http\Requests\StoreInventoryRequest;
use App\Http\Requests\UpdateInventoryRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\InventoryService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class InventoryController extends Controller
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

        return Inertia::render('Inventory/Index', [
            'inventories'=> $resultList,
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
        $validatedData = $request->validated();
        $recordData = new Inventory();
        $recordData->created_by = Auth::user()->id;
        $recordData->invent_id = $validatedData['invent_id'];
        $recordData->invent_prod_id = $validatedData['invent_prod_id'];
        $recordData->invent_quantity = $validatedData['invent_quantity'];
        $recordData->invent_price = $validatedData['invent_price'];
        $recordData-save();

        $attachment = $this->saveAttachmentFile($request);
        if($attachment){
            $attachment->att_description = 'Inventory attachment file';
            $recordData->attachment()->save($attachment);
        }

        $this->setStatusSession('Inventory record '.$recordData->invent_id.' has been added.');

        return redirect('/inventories');
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
        $validatedData = $request->validated();

        $inventory->modified_by = Auth::user()->id;
        $recordData->invent_id = $validatedData['invent_id'];
        $recordData->invent_prod_id = $validatedData['invent_prod_id'];
        $recordData->invent_quantity = $validatedData['invent_quantity'];
        $recordData->invent_price = $validatedData['invent_price'];
        $recordData-save();
       

        $this->setStatusSession('Inventory record '.$recordData->invent_id.' has been added.');

        return redirect('/inventories');
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
