<?php 

namespace App\Services;

use App\Models\MyProductReview;
use App\Traits\DropDownListOptions;

class MyProductReviewService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = MyProductReview::with('createdBy')->with('orders');


    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}