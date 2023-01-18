<?php 

namespace App\Services;

use App\Models\Address;
use App\Traits\DropDownListOptions;


class AddressService extends AbstractModelService implements IModelService{

    use DropDownListOptions;

    public function getList($filters, $paginate=false){
        $resultList = Address::with('createdBy')->with('orders');
        // if(Auth::user()->isCustomer){
        //     $resultList = $resultList->where('created_by', Auth::user()->id);
        //}
    }

    

    public function setValues($formdata, $record){

    }

    public function destroy($recordId){
        
    }

    public function getCustomerByUserID ($id){
        
        
        $customerInformation = Customer::with('billingAddress')->with('shippingAddress')->where('cust_user_id', $id)->first();

        
        \Log::info($customerInformation);

        return $customerInformation;
       
    }

}