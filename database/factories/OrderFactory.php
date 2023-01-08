<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'ord_cust_id' => fake()->randomNumber(2),
            'ord_delivery_address' => fake () -> address(),
            'ord_payment_method' => fake() -> creditCardType(),
            'ord_amount' => fake()->randomNumber(3, true),
            'ord_status'  => 1,
            'ord_paid'  => fake()->randomDigit(10),
            'created_by' => 1,
            'created_at'=>fake()->dateTime(),
            'updated_at'=>fake()->dateTime(),
        ];
    }
}
