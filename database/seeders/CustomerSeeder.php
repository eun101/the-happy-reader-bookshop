<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Customer;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\User::factory()->count(50)->create()->each(function($user) {
            Customer::factory()->create(['cust_user_id' => $user->id, 'cust_firstname' => $user->name, 'cust_email' => $user->email]);
            
        });
    }
}
