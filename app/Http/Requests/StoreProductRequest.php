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
                'prod_categ_id' => 'required|integer',
                'prod_title'=> 'required|max:255',
                'prod_author'=>'required|max:255',
                'prod_description'=>'required|max:2000',
                'invent_quantity'=>'nullable|integer',
                'invent_price'=>'nullable|numeric',

            ];
        }
    }
