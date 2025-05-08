<?php

use App\Http\Controllers\FormController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'me']);
Route::post('/form', [FormController::class, 'store']);
Route::apiResource('/showcase', 'App\Http\Controllers\ShowcaseController');
Route::apiResource('/subscribe', 'App\Http\Controllers\SubscribeController');
