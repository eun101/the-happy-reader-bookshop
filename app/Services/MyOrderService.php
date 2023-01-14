<?php 

namespace App\Services;

use App\Models\MyOrder;
use App\Traits\DropDownListOptions;

class MyOrderService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = MyOrder::with('createdBy')->with('orders');


    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}