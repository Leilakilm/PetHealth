<?php

use App\Http\Controllers\API\FeedbackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\PetController;
use App\Http\Controllers\API\RecordController;
use App\Http\Controllers\API\AppointmentsController;
use App\Http\Controllers\API\Admin\AppointmentsController as AdminAppointmentsController;
use App\Http\Controllers\API\Admin\DoctorsController;

    Route::prefix('registration')->group(function () {
        Route::post('/', [RegisterController::class, 'store']);
    });
    Route::prefix('login')->group(function () {
        Route::post('/', [LoginController::class, 'store']);
    });

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('pets')->group(function () {
        Route::get('/', [PetController::class, 'index']);
        Route::post('/', [PetController::class, 'store']);
    });
    Route::prefix('record')->group(function () {
        Route::post('/', [RecordController::class, 'index']);
        Route::post('/create', [RecordController::class, 'store']);
    });
    Route::prefix('appointments')->group(function () {
        Route::get('/', [AppointmentsController::class, 'index']);
        Route::patch('/{appointment}', [AppointmentsController::class, 'update']);
    });
    Route::prefix('feedback/{appointment}')->group(function () {
        Route::get('/', [FeedbackController::class, 'index']);
        Route::post('/create', [FeedbackController::class, 'store']);
    });
    Route::middleware('admin')->group(function () {
        Route::prefix('appointments_control')->group(function () {
            Route::get('/', [AdminAppointmentsController::class, 'index']);
            Route::patch('/{appointment}', [AdminAppointmentsController::class, 'update']);
        });
        Route::prefix('doctors')->group(function () {
            Route::get('/', [DoctorsController::class, 'index']);
            Route::post('/create', [DoctorsController::class, 'store']);
        });
    });
});
