<?php

namespace App\Traits;


use App\Models\Category;



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


    // public function getGroupOptionList($groupId){
    //     return Option::where('opt_group_id', $groupId)->orderBy('opt_sort_order','asc')->get();
    // }

    // public function getInvoiceStatusList(){
    //     return $this->getGroupOptionList(1);
    // }

    // public function getInvoicePaymentMethodList(){
    //     return $this->getGroupOptionList(2);
    // }

}
