<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = "prod_id";

    protected $dates = ['created_at', 'updated_at','deleted_at',];

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
