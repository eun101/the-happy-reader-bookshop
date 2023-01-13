<?php 

namespace App\Services;

use App\Models\Order;
use App\Traits\DropDownListOptions;

class OrderService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Order::with('createdBy')->with('customer')->with('orders');

        if(array_key_exists('keyword', $filters) && $filters['keyword'] != ''){
            $resultList->where(function($query) use($filters){
                $query->where('ord_cust_id','like', '%'.$filters['keyword'].'%');
                $query->orWhere('ord_delivery_address','like', '%'.$filters['keyword'].'%');
                $query->orWhere('ord_delivery_address','like', '%'.$filters['keyword'].'%');
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