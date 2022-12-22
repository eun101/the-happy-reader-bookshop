<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = "sales_id";

    protected $dates = ['created_at', 'updated_at','deleted_at','sales_total_amount'];

    
}
