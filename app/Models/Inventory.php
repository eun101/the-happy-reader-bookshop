<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $fillable = "invent_id";

    protected $dates = ['created_at', 'updated_at','deleted_at','invent_price'];

}
