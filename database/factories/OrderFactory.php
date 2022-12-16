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
            'ord_client_id' => Str::random(10),
            'ord_delivery_address' => fake () -> address(),
            'ord_payment_method' => fake() -> word (5),
            'ord_amount' => fake () -> amount(),
            'ord_status'  => Str::random(10),
            'ord_paid'  => Str::random(10),
            'created_by' => 1,
            'created_at'=>fake()->dateTime(),
            'updated_at'=>fake()->dateTime(),
        ];
    }
}
