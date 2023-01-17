<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends BaseModel
{
    protected $primaryKey = "addr_id";

    public function billingAddress(){
        return $this->belongsTo('App\Models\Address','cust_billing_address')->withDefault();
    }

    public function shippingAddress(){
        return $this->belongsTo('App\Models\Address','cust_shipping_address')->withDefault();
    }
            
    
}
