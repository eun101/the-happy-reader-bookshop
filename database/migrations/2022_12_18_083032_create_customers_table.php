<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('cust_id');
            $table->integer('cust_user_id')->nullable();
            $table->string('cust_firstname')->nullable();
            $table->string('cust_lastname')->nullable();
            $table->string('cust_contact')->nullable();
            $table->string('cust_email')->nullable();
            $table->integer('cust_billing_address')->nullable();
            $table->integer('cust_shipping_address')->nullable();
            $table->integer('created_by');
            $table->dateTime('created_at');
            $table->integer('modified_by')->nullable()->default(0);
            $table->dateTime('updated_at');
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
};
