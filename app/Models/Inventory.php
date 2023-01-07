<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $primaryKey = "invent_id";

    public function title(){
        return $this->belongsTo('App\Models\Category','invent_prod_id')->withDefault();
    }


}
