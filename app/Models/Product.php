<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = "prod_id";

    protected $dates = ['created_at', 'updated_at','deleted_at','prod_author'];
}
