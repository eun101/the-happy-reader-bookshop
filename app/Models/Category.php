<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends BaseModel
{
    protected $primaryKey = "categ_id";

    public function category(){
        return $this->belongsTo('App\Models\Inventory','categ_id')->withDefault();
    }
    
}
