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
           'cust_user_id' => fake () -> numberBetween (1,30),
            'cust_firstname' => fake () ->   firstName (),
            'cust_lastname' => fake () ->  lastName (),
            'cust_contact' => fake() -> numerify('#########'),
            'cust_email' => fake () ->  email(),
            // 'cust_password' => fake () -> password (),
            'cust_billing_address' => fake () -> numberBetween (1,100),
            'cust_shipping_address' => fake () -> numberBetween (1,100),
            'created_by' => 1,
            'created_at'=>fake()->dateTimeThisDecade(),
            'updated_at'=>fake()->dateTimeThisDecade('+2 years'),
        ];
    }
}