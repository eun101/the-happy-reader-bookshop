<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderList>
 */
class OrderListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'ordlist_ord_id' =>fake()-> numberBetween(1,100),
            'ordlist_prod_id' => fake() -> numberBetween(1,20),
            'ordlist_quantity' => fake()-> numberBetween(10,20),
            'ordlist_price' =>  fake()->randomNumber(3, true),
            'ordlist_total' =>  fake() ->randomNumber(3, true),
            'created_by' => 1,
            'created_at'=>fake()->dateTime(),
            'updated_at'=>fake()->dateTime(),
        ];
    }
}
