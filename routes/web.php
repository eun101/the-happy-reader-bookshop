<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CustomerProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\InventoryController;




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// Route::get('/admin', function () {
//     return Inertia::render('LoginAdmin', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/admin', function(){
    return Inertia::render ('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('customer/account', function () {
    return Inertia::render('DashboardCustomers');
})->middleware(['auth', 'verified'])->name('customeraccount');


// Route::get('/about-us', function () {
//     return Inertia::render('AboutUs');
// });


// Route::get('/order', function () {
//     return Inertia::render('Order.Index');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::prefix('customer')->group(function(){
    Route::get('/profile', [CustomerProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [CustomerProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [CustomerProfileController::class, 'destroy'])->name('profile.destroy');
});
});


Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function(){
    Route::get('/profile', [ProfileController::class, 'edit'])->name('adminprofile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('adminprofile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('adminprofile.destroy');

    Route::resource('customers', CustomerController::class);
    Route::resource('orders', OrderController::class);
    Route::resource('sales', SaleController::class);
    Route::resource('books', ProductController::class);
    Route::resource('inventories',InventoryController::class);
    Route::resource('blogs', SaleController::class);
 
});
});





require __DIR__.'/auth.php';
