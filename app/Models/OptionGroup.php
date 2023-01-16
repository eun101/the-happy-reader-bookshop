<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptionGroup extends BaseModel
{
    protected $primaryKey = "opgr_id";

    public function options(){
        return $this->hasMany('App\Models\Option','opti_group_id');
    }

    public function optionsInclude(){
        return $this->hasMany('App\Models\Option','opti_group_id')->wherein('opti_id', [1,2]);
    }

    public function optionsInclude1(){
        return $this->options()->wherein('opti_id', [1,2])->orderby('opti_name','desc');
    }
}
