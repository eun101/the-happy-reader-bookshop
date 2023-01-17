<?php 

namespace App\Services;

use App\Models\Dashboard;
use App\Traits\DropDownListOptions;

class DashboardService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Dashboard::with('createdBy');

    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }

  

}