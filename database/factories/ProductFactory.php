<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'prod_categ_id' =>fake()-> numberBetween(1,4),
            'prod_title' => fake() -> word(3),
            'prod_author' => fake() -> name(),
            'prod_description' => fake() -> sentence(),
            'prod_status'  => 1,
            'created_by' => 1,
            'created_at'=>fake()->dateTimeThisDecade(),
            'updated_at'=>fake()->dateTimeThisDecade('+2 years'),
        ];
    }
}
