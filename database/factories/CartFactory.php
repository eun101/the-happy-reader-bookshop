<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cart>
 */
class CartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cart_invent_id' =>fake()-> numberBetween(1,20),
            'cart_price' =>fake()->randomNumber(3, true),
            'cart_quantity' => fake () -> numberBetween (10,20),
            'created_by' => 1,
            'created_at'=>fake()->dateTime(),
            'updated_at'=>fake()->dateTime(),
        ];
    }
}
