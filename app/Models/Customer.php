<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends BaseModel
{

    protected $primaryKey = "cust_id";

    // protected $fillable= [
    //     'cust_user_id',
    //     'cust_firstname',
    //     'cust_lastname',
    // ];



    public function orders(){
        return $this->belongsTo('App\Models\Order','cust_firstname')->withDefault();
    }

    public function billingAddress(){
        return $this->belongsTo('App\Models\Address','cust_billing_address')->withDefault();
    }

    public function shippingAddress(){
        return $this->belongsTo('App\Models\Address','cust_shipping_address')->withDefault();
    }

    public function user(){
        return $this->belongs('App\Models\Users','cust_user_id')->withDefault();
    }



    // public function customerInfo(){
    //     return $this->belongsTo('App\Models\Customer','cust_id')->withDefault();
    // }

   
    
}
