<?php

use App\Http\Controllers\ProfileController;


use App\Http\Controllers\CustomerProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\OrderListController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\MyOrderController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AccountInformationController;
use App\Http\Controllers\AccountDashboardController;
use App\Http\Controllers\BillingDetailController;
use App\Http\Controllers\MyProductReviewController;





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


Route::get('/products', function () {
    return Inertia::render('Products', [
       'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/shop', function () {
    return Inertia::render('Shop', [
       'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/shipping', function () {
    return Inertia::render('ShippingAddress', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/productdetails', function () {
    return Inertia::render('ProductDetails', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/aboutus', function () {
    return Inertia::render('AboutUs', [
       'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/contactus', function () {
    return Inertia::render('ContactUs', [
       'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::get('/admin', function () {
    return Inertia::render('LoginAdmin', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/admin', function(){
//     return Inertia::render ('LoginAdmin');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('admin/dashboard', function(){
    return Inertia::render ('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::redirect('/admin', 'admin/dashboard');



Route::get('customer/account', function () {
    return Inertia::render('DashboardCustomers');
})->middleware(['auth', 'verified'])->name('customeraccount');




Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});


// Route::get('/order', function () {
//     return Inertia::render('Order.Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['middleware' => ['auth']], function () {
    Route::prefix('customer/account')->group(function(){
    Route::get('/profile', [CustomerProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [CustomerProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [CustomerProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/my-orders', MyOrderController::class);
    Route::resource('/address', AddressController::class);
    Route::resource('/dashboard', AccountDashboardController::class);
    Route::get('/information', [CustomerController::class, 'customerInfo'])->name('information.index');
    // Route::get('/information', [CustomerController::class, 'update'])->name('information.edit');
    Route::resource('/billing-details', BillingDetailController::class);
    Route::resource('/my-product-reviews', MyProductReviewController::class);
    Route::resource('/wishlist', WishlistController::class);
    });
});

Route::group(['middleware' => ['role:Admin', 'auth']], function () {
    Route::prefix('admin')->group(function(){

        Route::get('/profile', [ProfileController::class, 'edit'])->name('adminprofile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('adminprofile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('adminprofile.destroy');
        
        // Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard.index');)
        Route::resource('orders', OrderController::class);
        Route::resource('sales', SaleController::class);
        Route::resource('products', ProductController::class);
        Route::resource('inventories',InventoryController::class);
        Route::resource('blogs', SaleController::class);
        Route::resource('place-order', OrderListController::class);
        Route::resource('customers', CustomerController::class);
    });
    
});









require __DIR__.'/auth.php';