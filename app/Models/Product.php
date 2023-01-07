<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{

    protected $primaryKey = "prod_id";


    public function attachment(){
        return $this->morphOne('App\Models\Attachment','att_reference')->withDefault();
    }

    public function category(){
        return $this->belongsTo('App\Models\Category','categ_category_name')->withDefault();
    }



    // public function customer(){
    //     return $this->belongsTo('App\Models\Customer','ord_delivery_address')->withDefault();
    // }

    // public function status(){
    //     return $this->belongsTo('App\Models\OrderList','ord_status')->withDefault();
    // }

    // public function paymentMethod(){
    //     return $this->belongsTo('App\Models\OrderList','ord_payment_method')->withDefault();
    // }
}
