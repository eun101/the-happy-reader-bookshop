<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    
    protected $primaryKey = "ord_id";

    protected $dates = ['created_at', 'updated_at','deleted_at',];

    public function customer(){
        return $this->hasMany('App\Models\Customer','cust_id')->withDefault();
    }

    public function status(){
        return $this->belongsTo('App\Models\OrderList','ord_status')->withDefault();
    }

    public function paymentMethod(){
        return $this->belongsTo('App\Models\OrderList','ord_payment_method')->withDefault();
    }

    public function contact(){
        return $this->belongsTo('App\Models\Customer','cust_contact')->withDefault();
    }

}