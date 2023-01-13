<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dashboard extends BaseModel
{
    use HasFactory;

    public static function getSummaryReport(){
        return Sale::select(DB::raw("sum(sales_total_amount) as total_sales_amount"), DB::raw("count(sales_id) as number_of_sales"))->get();
    }

}
