<?php

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\SupplierController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\ExpenseController;
use App\Http\Controllers\Api\PosController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SalaryController;
use App\Http\Controllers\Api\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login',[AuthController::class, 'login']);
    Route::post('signup',[AuthController::class, 'signup']);
    Route::post('logout',[AuthController::class, 'logout']);
    Route::post('refresh',[AuthController::class, 'refresh']);
    Route::post('me',[AuthController::class, 'me']);

});

Route::apiResource('/employee',EmployeeController::class);
Route::apiResource('/customer',CustomerController::class);
Route::apiResource('/supplier',SupplierController::class);
Route::apiResource('/category',CategoryController::class);
Route::apiResource('/product',ProductController::class);
Route::apiResource('/expense',ExpenseController::class);

// salary routes
Route::Post('/salary/paid/{id}',[SalaryController::class, 'Paid']);
Route::get('/salary',[SalaryController::class, 'AllSalary']);
Route::get('/salary/view/{id}',[SalaryController::class, 'ViewSalary']);
Route::get('/edit/salary/{id}',[SalaryController::class, 'EditSalary']);
Route::post('/salary/update/{id}',[SalaryController::class, 'SalaryUpdate']);

// stock route
Route::post('/stock/update/{id}',[ProductController::class, 'StockUpdate']);
// subproduct route
Route::get('/getting/product/{id}',[PosController::class, 'GetProduct']);

// add to cart route
Route::get('/addToCart/{id}',[CartController::class, 'AddToCart']);
// cart product route
Route::get('/cart/product',[CartController::class, 'CartProduct']);
// cart item remove or delete route
Route::get('/remove/cart/{id}',[CartController::class, 'RemoveCart']);
// cart item increment route
Route::get('/increment/{id}',[CartController::class, 'increment']);
// cart item decrement route
Route::get('/decrement/{id}',[CartController::class, 'decrement']);
// vat route
Route::get('/vats',[CartController::class, 'Vats']);
//customer due pay by in pos page route
Route::post('/orderdone',[PosController::class, 'OrderDone']);
// order route
Route::get('/orders',[OrderController::class, 'TodayOrder']);
Route::get('/order/details/{id}',[OrderController::class, 'OrderDetails']);
Route::get('/order/orderdetails/{id}',[OrderController::class, 'OrderDetailsAll']);

// search order route
Route::post('/search/order',[PosController::class, 'SearchOrderDate']);

// admin dashboard route
Route::get('/today/sell',[PosController::class, 'TodaySell']);
Route::get('/today/income',[PosController::class, 'TodayIncome']);
Route::get('/today/due',[PosController::class, 'TodayDue']);
Route::get('/today/expense',[PosController::class, 'TodayExpense']);
Route::get('/today/stockout',[PosController::class, 'StockOut']);





