<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends BaseModel
{
    use HasFactory;

    protected $primaryKey = "invent_id";

    public function product(){
        return $this->belongsTo('App\Models\Product','invent_prod_id')->withDefault();
    }

    public function orders(){
        return $this->belongsTo('App\Models\Order','invent_prod_id')->withDefault();
    }

    public function categories(){
        return $this->belongsTo('App\Models\Category','invent_prod_id')->withDefault();

    }

    public function attachment(){
        return $this->morphOne('App\Models\Attachment','att_reference')->withDefault();
    }

    // public function title(){
    //     return $this->belongsTo('App\Models\Product','invent_prod_id')->withDefault();
    // }
     

    public function getAttachmentPathAttribute($value){
        return $this->attachment->att_storage_path;
    }



}