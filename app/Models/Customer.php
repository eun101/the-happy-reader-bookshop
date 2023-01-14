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

    public function user(){
        return $this->hasOne('App\Models\User', 'cust_user_id')->withDefault();
    }
    
}
