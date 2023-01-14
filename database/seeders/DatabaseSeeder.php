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
        //     'name' => 'Super Admin',
            'email' => 'superadmin@thr.com',
        ]);

        
        // \App\Models\Customer::factory()->create([
        //     'cust_firstname' => 'Customer',
        //     'cust_lastname' => '1',
        //     'cust_email' => 'customer11@gmail.com',
        //     'cust_password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        // ]);



        \App\Models\OrderList::factory(100)->create();	 
        \App\Models\Order::factory(100)->create();
        \App\Models\Cart::factory(100)->create();
        // \App\Models\Customer::factory(100)->create();
        \App\Models\Inventory::factory(100)->create();
        \App\Models\Product::factory(100)->create();
        \App\Models\Sale::factory(100)->create();


        \App\Models\Category::factory()->create(['categ_category_name'=> 'Cookbooks',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Inspirational',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Family Life',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Youth',]);
        \App\Models\Category::factory()->create(['categ_category_name'=> 'Spirituality',]);

        \App\Models\OptionGroup::factory()->create(['opgr_code' => 'DELIVSTATUS','opgr_name' => 'Delivery Status',]);
 
        \App\Models\Option::factory()->create(['opti_code' => 'PROCESSING','opti_name' => 'Processing','opti_group_id' => 1,]);
        \App\Models\Option::factory()->create(['opti_code' => 'PACKED','opti_name' => 'Packed','opti_group_id' => 1,]);
        \App\Models\Option::factory()->create(['opti_code' => 'TO SHIP','opti_name' => 'To Ship','opti_group_id' => 1,]);
        \App\Models\Option::factory()->create(['opti_code' => 'SHIPPED','opti_name' => 'Shipped','opti_group_id' => 1,]);
        \App\Models\Option::factory()->create(['opti_code' => 'DELIVERED','opti_name' => 'Delivered','opti_group_id' => 1,]);
        \App\Models\Option::factory()->create(['opti_code' => 'CANCELLED','opti_name' => 'Cancelled','opti_group_id' => 1,]);
 
        \App\Models\OptionGroup::factory()->create(['opgr_code' => 'PAYMETH','opgr_name' => 'Payment Method',]);
 
        \App\Models\Option::factory()->create(['opti_code' => 'COD','opti_name' => 'Cash on Delivery','opti_group_id' => 2,]);
        \App\Models\Option::factory()->create(['opti_code' => 'CC','opti_name' => 'Credit Card','opti_group_id' => 2,]);
        \App\Models\Option::factory()->create(['opti_code' => 'GCash','opti_name' => 'GCash','opti_group_id' => 2,]);
        \App\Models\Option::factory()->create(['opti_code' => 'Paypal','opti_name' => 'Paypal','opti_group_id' => 2,]);
 
        \App\Models\OptionGroup::factory()->create(['opgr_code' => 'ADDRESS','opgr_name' => 'Address',]);
 
        \App\Models\Option::factory()->create(['opti_code' => 'SHIPADDRESS','opti_name' => 'Shipping Address','opti_group_id' => 3,]);
        \App\Models\Option::factory()->create(['opti_code' => 'BILLADDRESS','opti_name' => 'Billing Address','opti_group_id' => 3,]);
    }
}
