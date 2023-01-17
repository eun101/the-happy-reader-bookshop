<?php 

namespace App\Services;

use App\Models\BillingDetail;
use App\Traits\DropDownListOptions;

class BillingDetailService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = BillingDetail::with('createdBy')->with('orders');


    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}