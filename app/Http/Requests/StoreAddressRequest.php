<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAddressRequest extends FormRequest
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
            'addr_street_address' => 'required|max:255',
            'addr_city'=> 'required|max:255',
            'addr_state_or_province'=>'required|max:255',
            'addr_postal_code'=>'required|max:255',
            'addr_country'=>'required|max:255',
            'cust_billing_address' => 'nullable|integer',
            'cust_shippin_address' => 'nullable|integer'
        ];
    }
}
