<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $primaryKey = "ord_id";

    protected $dates = ['created_at', 'updated_at','deleted_at','inv_date'];
    


}