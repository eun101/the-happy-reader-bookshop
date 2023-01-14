<?php 

namespace App\Services;

use App\Models\AccountDashboard;
use App\Traits\DropDownListOptions;

class AccountDashboardService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = AccountDashboard::with('createdBy')->with('orders');


    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}