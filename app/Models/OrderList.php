<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderList extends BaseModel
{
    protected $primaryKey = "ordlist_id";

    public function products(){
        return $this->belongsTo('App\Models\Product','ordlist_prod_id')->withDefault();
    }
}
