<?php 

namespace App\Services;

use App\Models\Inventory;
use App\Traits\DropDownListOptions;

class InventoryService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Inventory::with('createdBy')->with('orders')->with('product')->with('categories');

        if(array_key_exists('keyword', $filters) && $filters['keyword'] != ''){
            $resultList->where(function($query) use($filters){
                $query->where('invent_prod_id','like', '%'.$filters['keyword'].'%');
                $query->orWhere('invent_quantity','like', '%'.$filters['keyword'].'%');
                $query->orWhere('invent_quantity','like', '%'.$filters['keyword'].'%');
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