<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sale>
 */
class SaleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'sales_order_id' =>fake()-> numberBetween(1,100),
            'sales_total_amount' =>fake()-> numberBetween(1,100),
            'created_by' => 1,
            'created_at'=>fake()->dateTimeThisDecade(),
            'updated_at'=>fake()->dateTimeThisDecade('+2 years'),
        ];
    }
}
