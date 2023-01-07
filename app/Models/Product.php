<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{

    protected $primaryKey = "prod_id";

<<<<<<< HEAD

    public function attachment(){
        return $this->morphOne('App\Models\Attachment','att_reference')->withDefault();
    }

    public function category(){
        return $this->belongsTo('App\Models\Category','categ_category_name')->withDefault();
    }


=======
    public function categories(){
        return $this->belongsTo('App\Models\Category','prod_categ_id')->withDefault();
    }
>>>>>>> 26417eca9ee2cfb5a373f0a1b56c435c27d1e16c

}
