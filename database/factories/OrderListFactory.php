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
        // $quantity = 'ordlist_quantity'-> numberBetween(10,20);
        // $price = 'ordlist_price';
        // $total = $quantity * $price;

        $quantity = fake( )-> numberBetween(1,100);
        $price = fake()-> randomNumber(3, true);

        return [
            'ordlist_ord_id' =>fake()-> numberBetween(1,100),
            'ordlist_prod_id' => fake() -> numberBetween(1,20),
            'ordlist_quantity' => $quantity,
            'ordlist_price' =>  $price,
            'ordlist_total' =>  $quantity * $price,
            'created_by' => 1,
            'created_at'=>fake()->dateTimeThisDecade(),
            'updated_at'=>fake()->dateTimeThisDecade('+2 years'),
        ];
    }
}
