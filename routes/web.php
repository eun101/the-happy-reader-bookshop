<?php

use App\Http\Controllers\ProfileController;
<<<<<<< HEAD
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CustomerProfileController;
=======
>>>>>>> db3fcebcce2a59996c9d5e34193d56a31d2c5147
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;


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


<<<<<<< HEAD
Route::get('/admin', function () {
    return Inertia::render('LoginAdmin', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/admin', function(){
    return Inertia::render ('Dashboard');
=======
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
>>>>>>> db3fcebcce2a59996c9d5e34193d56a31d2c5147
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('customer/account', function () {
    return Inertia::render('DashboardCustomers');
})->middleware(['auth', 'verified'])->name('customeraccount');


// Route::get('/about-us', function () {
//     return Inertia::render('AboutUs');
// });



Route::get('/order', function () {
    return Inertia::render('Order.Index');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
<<<<<<< HEAD
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
});
=======
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('orders', OrderController::class);
>>>>>>> db3fcebcce2a59996c9d5e34193d56a31d2c5147
});




require __DIR__.'/auth.php';
