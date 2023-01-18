<?php 

namespace App\Services;

use App\Models\Customer;
use App\Traits\DropDownListOptions;

class CustomerService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){

        $resultList = Customer::with('createdBy')->with('orders');


        if(array_key_exists('keyword', $filters) && $filters['keyword'] != ''){
            $resultList->where(function($query) use($filters){
                $query->where('cust_id','like', '%'.$filters['keyword'].'%');
                $query->orWhere('cust_firstname','like', '%'.$filters['keyword'].'%');
                $query->orWhere('cust_firstname','like', '%'.$filters['keyword'].'%');
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

    public function getCustomerByUserID ($id){

        
        
        $customerInformation = Customer::with('billingAddress')->with('shippingAddress')->where('cust_user_id', $id)->first();

        
        // \Log::info($customerInformation);
        return $customerInformation;
       
    }




}