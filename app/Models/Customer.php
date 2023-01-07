<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends BaseModel
{

    protected $primaryKey = "cust_id";


    public function orders(){
        return $this->belongsTo('App\Models\Order','cust_firstname')->withDefault();
    }

    
}
