<?php 

namespace App\Services;

use App\Models\Sale;
use App\Traits\DropDownListOptions;

class SaleService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Sale::with('createdBy')->with('customers')->with('orders');


        if(array_key_exists('keyword', $filters) && $filters['keyword'] != ''){
            $resultList->where(function($query) use($filters){
                $query->where('sales_order_id','like', '%'.$filters['keyword'].'%');
                $query->orWhere('sales_total_amount','like', '%'.$filters['keyword'].'%');
                $query->orWhere('sales_total_amount','like', '%'.$filters['keyword'].'%');
            });
        }

     
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