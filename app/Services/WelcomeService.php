<?php 

namespace App\Services;

use App\Models\Welcome;
use App\Traits\DropDownListOptions;

class WelcomeService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Welcome::with('createdBy')->with('orders');


    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}