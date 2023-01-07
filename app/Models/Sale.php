<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends BaseModel
{

    protected $primaryKey = "sales_id";

    public function customers(){
        return $this->belongsTo('App\Models\Customer','sales_order_id')->withDefault();
    }
    
    public function orders(){
        return $this->belongsTo('App\Models\Order','ord_cust_id')->withDefault();
    }


    
}
