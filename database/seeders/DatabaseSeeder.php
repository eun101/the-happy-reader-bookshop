<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@thr.com',
        ]);



        \App\Models\OrderList::factory(100)->create();	 
        \App\Models\Order::factory(100)->create();
        \App\Models\Cart::factory(100)->create();
        \App\Models\Customer::factory(100)->create();
        \App\Models\Inventory::factory(100)->create();
        \App\Models\Product::factory(100)->create();
        \App\Models\Sale::factory(100)->create();


        \App\Models\Category::factory()->create(['categ_category_name'=> 'Cookbooks',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Inspirational',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Family Life',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Youth',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Spirituality',]);

    }
}
