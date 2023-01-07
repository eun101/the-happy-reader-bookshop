<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'prod_categ_id'=> 'required|max:500,'.$this->get('prod_id'). ',prod_id|max:15',
            'prod_title'=>'required|integer',
            'prod_author'=>'required|integer',
            'prod_description'=>'required|integer',
            'prod_status'=>'required|integer',
        ];
    }
}
