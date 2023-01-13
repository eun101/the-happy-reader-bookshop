<?php 

namespace App\Services;

use App\Models\Dashboard;
use App\Traits\DropDownListOptions;
use DB;

class DashboardService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Sale::select('cust_firstname','cust_email','cust_contact','sales.created_at as created_at',DB::raw("sum(sales_total_amount) as total_sales_amount"), DB::raw("count(sales_id) as number_of_sales"))
        ->with('createdBy')
        ->join('orders','ord_id','=','sales_order_id')
        ->join('customers','cust_id','=','ord_cust_id');

        if(array_key_exists('keyword', $filters) && $filters['keyword'] != ''){
            $resultList->where(function($query) use($filters){
                $query->where('sales_order_id','like', '%'.$filters['keyword'].'%');
                $query->orWhere('sales_total_amount','like', '%'.$filters['keyword'].'%');
                $query->orWhere('sales_total_amount','like', '%'.$filters['keyword'].'%');
            });
        }

        $resultList->groupBy('sales_order_id','cust_firstname','cust_email','cust_contact');
        $resultList->orderBy('cust_firstname','desc');

        if($paginate){
            return $resultList->paginate(config('constants.PAGINATION_COUNT'));
        }else{
            return $resultList->get();
        }
        
    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}