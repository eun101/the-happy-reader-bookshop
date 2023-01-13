<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{

    protected $primaryKey = "prod_id";

    public function categories(){
        return $this->belongsTo('App\Models\Category','prod_categ_id')->withDefault();
    }

    public function order(){
        return $this->belongsTo('App\Models\Order','prod_categ_id')->withDefault();
    }

}
