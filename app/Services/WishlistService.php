<?php 

namespace App\Services;

use App\Models\Wishlist;
use App\Traits\DropDownListOptions;

class WishlistService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Wishlist::with('createdBy')->with('orders');


    }

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }
  

}