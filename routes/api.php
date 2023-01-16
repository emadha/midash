<?php

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

Route::middleware('auth:sanctum')->get('/user', function ( Request $request ) {
    return $request->user();
});

Route::middleware('auth')->group(function () {
    Route::get('wallets', [ \App\Http\Controllers\ProfileController::class, 'api_wallets' ]);
});
Route::middleware('auth')->prefix('pools')->group(function () {
    Route::get('list', [ \App\Http\Controllers\MiningPoolController::class, 'MiningPoolsListFromAPI' ]);
});
