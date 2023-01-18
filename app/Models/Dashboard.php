<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Dashboard extends BaseModel
{
    use HasFactory;

    public static function getSummaryReport(){
        return Sale::select(DB::raw("sum(sales_total_amount) as total_sales_amount"), DB::raw("count(sales_id) as number_of_sales"))->get();
    }

    public function quantity(){
        return $this->belongsTo('App\Models\OrderList','ordlist_quantity')->withDefault();
    }

    public function product(){
        return $this->belongsTo('App\Models\Product','prod_title')->withDefault();
    }

}
