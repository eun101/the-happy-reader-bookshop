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
            'prod_id'=> 'required|unique:products,prod_id,'.$this->get('prod_id'). ',prod_id|max:10',
            'prod_categ_id' => 'required|integer',
            'prod_title'=> 'required|max:255|string',
            'prod_author'=>'required|max:255|string',
            'prod_description'=>'required|max:300|string',
            // 'prod_status'=>'required|integer',
        ];
    }
}
