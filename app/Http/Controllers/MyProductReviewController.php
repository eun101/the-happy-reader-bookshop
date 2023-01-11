<?php

namespace App\Http\Controllers;

use App\Models\MyProductReview;
use App\Http\Requests\StoreMyProductReviewRequest;
use App\Http\Requests\UpdateMyProductReviewRequest;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ProductService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use DB;

class MyProductReviewController extends Controller
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


        return Inertia::render('Account/MyProductReview/Index', [
            'myProductReview'=> $resultList,
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
     * @param  \App\Http\Requests\StoreMyProductReviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMyProductReviewRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MyProductReview  $myProductReview
     * @return \Illuminate\Http\Response
     */
    public function show(MyProductReview $myProductReview)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MyProductReview  $myProductReview
     * @return \Illuminate\Http\Response
     */
    public function edit(MyProductReview $myProductReview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMyProductReviewRequest  $request
     * @param  \App\Models\MyProductReview  $myProductReview
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMyProductReviewRequest $request, MyProductReview $myProductReview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MyProductReview  $myProductReview
     * @return \Illuminate\Http\Response
     */
    public function destroy(MyProductReview $myProductReview)
    {
        //
    }
}
