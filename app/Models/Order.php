<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $primaryKey = "ord_id";

    protected $dates = ['created_at', 'updated_at','deleted_at',];

    // public function delivery(){
    //     return $this->hasMany('App\Models\Customer','ord_delivery_address')->withDefault();
    // }

    // public function status(){
    //     return $this->belongsTo('App\Models\Product','ord_status')->withDefault();
    // }

    // public function amount(){
    //     return $this->belongsTo('App\Models\OrderList','ord_amount')->withDefault();
    // }


}