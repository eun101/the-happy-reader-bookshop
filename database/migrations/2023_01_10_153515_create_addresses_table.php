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
        Schema::create('addresses', function (Blueprint $table) {
                $table->increments('addr_id');
                $table->string('addr_street_address')->nullable();
                $table->string('addr_city')->nullable();
                $table->string('addr_state_or_province')->nullable();
                $table->string('addr_postal_code')->nullable();
                $table->string('addr_country')->nullable();
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
        Schema::dropIfExists('addresses');
    }
};
