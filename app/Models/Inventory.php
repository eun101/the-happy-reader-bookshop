<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends BaseModel
{

    protected $primaryKey = "invent_id";

<<<<<<< HEAD
=======
    public function title(){
        return $this->belongsTo('App\Models\Category','invent_prod_id')->withDefault();
    }

>>>>>>> 26417eca9ee2cfb5a373f0a1b56c435c27d1e16c

}
