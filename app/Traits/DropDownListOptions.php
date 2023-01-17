<?php

namespace App\Traits;


use App\Models\Category;
use App\Models\Option;



trait DropDownListOptions {

    public function getOrderLists(){
        return Currency::orderby('ordlist_price', 'ASC')->get();
    }


    public function getCategoryList(){
        return Category::orderby('categ_category_name', 'ASC')->get();
        }

    public function getProductList(){
        return Category::orderby('prod_title', 'ASC')->get();
        }


    public function getGroupOptionList($groupId){
        return Option::where('opti_group_id', $groupId)->orderBy('opti_sort_order','asc')->get();
    }

    public function getDeliveryStatusList(){
        return $this->getGroupOptionList(1);
    }

    public function getPaymentMethodList(){
        return $this->getGroupOptionList(2);
    }

    public function getAddressList(){
        return $this->getGroupOptionList(3);
    }

}
