<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
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
            
                'ord_cust_id' => 'required|unique:orders|max:15',
                'ord_delivery_address'=> 'required|max:500',
                'ord_payment_method'=>'required|integer',
                'ord_amount'=>'required|integer',
                'ord_status'=>'required|integer',
                'ord_paid'=>'required|integer',
            ];
    }
}
