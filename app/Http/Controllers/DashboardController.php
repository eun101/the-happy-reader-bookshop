<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\User;
use App\Models\Order;
use App\Models\Sale;
use App\Models\Customer;
use App\Models\OrderList;
use App\Models\Product;
use Carbon\Carbon;
use DB;
use App\Http\Requests\StoreDashboardRequest;
use App\Http\Requests\UpdateDashboardRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\DashboardService as IModelService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
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
        $totalSale = Sale::count();
        $totalCustomer = Customer::count();
        // $totalBooks = OrderList::count('ordlist_quantity');
        $totalTitle = Product::count('prod_id');


        $todayDate = Carbon::now()->format('Y-m-d');
        $now = Carbon::now(); 
        $monthDate = $now->format('m');
        $YearDate = Carbon::now()->format('Y');


        $todayOrder = Order::whereDate('created_at', $todayDate)->count('ord_id');
        $monthOrder = Order::whereMonth('created_at', $monthDate)->count('ord_id');
        $yearOrder = Order::whereYear('created_at', $YearDate)->count('ord_id');
        
        $totalBooks = OrderList::whereMonth('created_at', $monthDate)->sum('ordlist_quantity');

        $todaySale = Sale::whereDate('created_at', $todayDate)->sum('sales_total_amount');
        $monthSale = Sale::whereMonth('created_at', $monthDate)->sum('sales_total_amount');
        $yearSale = Sale::whereYear('created_at', $YearDate)->sum('sales_total_amount');
        
        // \Log::info($todaySale);
        // dd($monthSale);
        
        return Inertia::render('Dashboard/Index', [
            'dashboard'=> $resultList,
            'status'=>$status,
            'totalOrder'=>$totalOrder,
            'totalCustomer'=>$totalCustomer,
            'totalBooks'=>number_format($totalBooks),
            'totalTitle'=>$totalTitle,
            'totalSale'=>$totalSale,
            'todayOrder'=>$todayOrder,
            'monthOrder'=>$monthOrder,
            'yearOrder'=>$yearOrder,
            'todaySale'=>number_format($todaySale, 2),
            'monthSale'=>number_format($monthSale, 2),
            'yearSale'=>number_format($yearSale, 2),
            

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
     * @param  \App\Http\Requests\StoreDashboardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDashboardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dashboard  $dashboard
     * @return \Illuminate\Http\Response
     */
    public function show(Dashboard $dashboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dashboard  $dashboard
     * @return \Illuminate\Http\Response
     */
    public function edit(Dashboard $dashboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDashboardRequest  $request
     * @param  \App\Models\Dashboard  $dashboard
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDashboardRequest $request, Dashboard $dashboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dashboard  $dashboard
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dashboard $dashboard)
    {
        //
    }
}