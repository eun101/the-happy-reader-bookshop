<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class Sale extends BaseModel
{
    use HasFactory;

    protected $primaryKey = "sales_id";

    public function customers(){
        return $this->belongsTo('App\Models\Customer','sales_order_id')->withDefault();
    }
    
    public function orders(){
        return $this->belongsTo('App\Models\OrderList','sales_order_id')->withDefault();
    }

    public function categories(){
        return $this->belongsTo('App\Models\Category','sales_order_id')->withDefault();
    }

    public static function getSummaryReport(){
        return Sale::select(DB::raw("sum(sales_total_amount) as total_sales_amount"), DB::raw("count(sales_id) as number_of_sales"))->get();
    }
    
}
