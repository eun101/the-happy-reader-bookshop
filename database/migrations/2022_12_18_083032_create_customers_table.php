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
            $table->string('cust_firstname');
            $table->string('cust_lastname');
            $table->string('cust_contact');
            $table->string('cust_email') ->unique();
            $table->string('cust_password');
            $table->string('cust_delivery_address');
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
