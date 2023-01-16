<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends BaseModel
{
    use HasFactory;

    protected $primaryKey = "invent_id";

    public function title(){
        return $this->belongsTo('App\Models\Product','invent_prod_id')->withDefault();
    }

    public function getAttachmentPathAttribute($value){
        return $this->attachment->att_storage_path;
    }



}
