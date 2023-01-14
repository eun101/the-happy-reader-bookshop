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

    public function inventory(){
        return $this->hasOne('App\Models\Inventory','invent_prod_id')->withDefault();
    }


    public function prod_reference(){
        return $this->morphTo();
    }

    public function attachment(){
        return $this->morphOne('App\Models\Attachment','att_reference')->withDefault();
    }

    public function getAttachmentPathAttribute($value){
        return $this->attachment->att_storage_path;
    }
}
