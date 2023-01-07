<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'prod_categ_id'=> 'required|integer',
            'prod_title'=>'required|max:200',
            'prod_author'=>'required|max:200',
            'prod_description'=>'required|max:500',
            'prod_status'=>'required|integer',
        ];
    }
}
