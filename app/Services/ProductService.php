<?php 

namespace App\Services;

use App\Models\Product;
use App\Traits\DropDownListOptions;

class ProductService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Product::with('createdBy')->with('categories')->with('order');


        if(array_key_exists('keyword', $filters) && $filters['keyword'] != ''){
            $resultList->where(function($query) use($filters){
                $query->where('prod_categ_id','like', '%'.$filters['keyword'].'%');
                $query->orWhere('prod_title','like', '%'.$filters['keyword'].'%');
                $query->orWhere('prod_title','like', '%'.$filters['keyword'].'%');
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