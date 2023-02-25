<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\GifController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\MenuController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//Protected routes
Route::group(
    [
        'middleware' => ['auth:api']
    ],
    function () {
        Route::post('/logout', [AuthController::class, 'logout']);

        //categories
        Route::get('/categories', [CategoryController::class, 'index']);
        Route::get('/categories/parents', [CategoryController::class, 'parents']);
        Route::post('/categories', [CategoryController::class, 'store']);
        Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

        //menus
        Route::get('/menus', [MenuController::class, 'index']);
        Route::get('/menus/{id}', [MenuController::class, 'show']);
        Route::post('/menus', [MenuController::class, 'store']);
        Route::post('/menus/{id}', [MenuController::class, 'update']);
        Route::delete('/menus/{id}', [MenuController::class, 'destroy']);

        //items
        Route::get('/items', [ItemController::class, 'index']);
        Route::get('/items/{id}', [ItemController::class, 'show']);
        Route::post('/items', [ItemController::class, 'store']);
        Route::post('/items/{id}', [ItemController::class, 'update']);
        Route::delete('/items/{id}', [ItemController::class, 'destroy']);
    }
);
