<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderList extends Model
{
    use HasFactory;

    protected $primaryKey = "ordlist_id";

    public function orders(){
        return $this->hasMany('App\Models\Order','ord_paid');
    }

    public function optionsInclude(){
        return $this->hasMany('App\Models\Order','ord_paid')->wherein('ord_id', [1,2]);
    }

    public function optionsInclude1(){
        return $this->orders()->wherein('ord_id', [1,2])->orderby('ord_amount','desc');
    }

}
