<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $primaryKey = "cust_id";

    protected $dates = ['created_at', 'updated_at','deleted_at',];


    // public function orders(){
    //     return $this->belongsTo('App\Models\Order','cust_firstname')->withDefault();
    // }

    // public function payment(){
    //     return $this->belongsTo('App\Models\order','cust_contact')->withDefault();
    // }

    // public function quantity(){
    //     return $this->belongsTo('App\Models\OrderList','cust_delivery_address')->withDefault();
    // }

    // public function getCustomerNumberAttribute(){
    //     return $this->cust_firstname;
    // }
}
