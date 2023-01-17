<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends BaseModel
{

    protected $primaryKey = "ord_id";


    public function customer(){
        return $this->belongsTo('App\Models\Customer','ord_cust_id')->withDefault();
    }

    public function orders(){
        return $this->belongsTo('App\Models\OrderList','ord_cust_id')->withDefault();
    }

}