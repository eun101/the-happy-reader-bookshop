<?php 

namespace App\Services;

use App\Models\AccountInformation;
use App\Traits\DropDownListOptions;

class AccountInformationService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = AccountInformation::with('createdBy')->with('orders');


    }


    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }

   

}