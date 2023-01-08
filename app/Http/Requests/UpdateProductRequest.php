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
            'prod_categ_id' => 'required|integer,'.$this->get('prod_id'). ',prod_id|',
            // 'prod_title'=> 'required|max:255',
            // 'prod_author'=>'required|max:255',
            // 'prod_description'=>'required|max:300',
            // 'prod_status'=>'required|integer',
        ];
    }
}
