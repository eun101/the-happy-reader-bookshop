<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventory>
 */
class InventoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'invent_prod_id' =>fake()-> numberBetween(1,100),
            'invent_quantity' => fake () -> numberBetween (10,20),
            'invent_price' =>fake()->randomNumber(3, true),
            'created_by' => 1,
            'created_at'=>fake()->dateTime(),
            'updated_at'=>fake()->dateTime(),
        ];
    }
}
