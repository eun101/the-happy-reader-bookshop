<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
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
            
            'cust_user_id' => 'required|integer',
            'cust_firstname' => 'required|max:255',
            'cust_lastname'=> 'required|max:255',
            'cust_contact'=>'required|max:255',
            'cust_email'=>'required|max:255',
            'cust_password'=>'required|max:255',
            'cust_delivery_address'=>'required|max:255',
        ];
    }
}
