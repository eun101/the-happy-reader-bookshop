<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cust_firstname' => fake () ->   firstName (),
            'cust_lastname' => fake () ->  lastName (),
            'cust_contact' => fake() -> numerify('#########'),
            'cust_email' => fake () ->  email(),
            'cust_password' => fake () -> password (),
            'cust_delivery_address' => fake () ->  address (),
            'created_by' => 1,
            'created_at'=>fake()->dateTime(),
            'updated_at'=>fake()->dateTime(),
        ];
    }
}