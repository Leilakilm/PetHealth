<?php

use App\Http\Controllers\API\Admin\AppointmentsController as AdminAppointmentsController;
use App\Http\Controllers\API\Admin\DoctorsController;
use App\Http\Controllers\API\AppointmentsController;
use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\LogoutController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\Auth\UserController;
use App\Http\Controllers\API\FeedbackController;
use App\Http\Controllers\API\PetController;
use App\Http\Controllers\API\RecordController;
use App\Http\Controllers\API\ScheduleController;
use Illuminate\Support\Facades\Route;

Route::prefix('registration')->group(function () {
    Route::post('/', [RegisterController::class, 'store']);
});
Route::prefix('login')->group(function () {
    Route::post('/', [LoginController::class, 'store']);
});

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [LogoutController::class, 'logout']);
    Route::get('/user', [UserController::class, 'getUser']);

    Route::get('/specializations', [DoctorsController::class, 'getSpecializations']);

    Route::get('/doctors', [DoctorsController::class, 'index']);
    Route::get('/doctors/{doctor}/slots', [ScheduleController::class, 'slots']);

    Route::prefix('pets')->group(function () {
        Route::get('/', [PetController::class, 'index']);
        Route::post('/', [PetController::class, 'store']);
    });


    Route::prefix('appointments')->group(function () {
        Route::post('/', [RecordController::class, 'store']);
        Route::get('/', [AppointmentsController::class, 'index']);
        Route::patch('/{appointment}', [AppointmentsController::class, 'update']);
    });

    Route::prefix('feedback/{appointment}')->group(function () {
        Route::get('/', [FeedbackController::class, 'index']);
        Route::post('/create', [FeedbackController::class, 'store']);
    });

    Route::middleware('admin')->prefix('admin')->group(function () {
        Route::prefix('appointments')->group(function () {
            Route::get('/', [AdminAppointmentsController::class, 'index']);
            Route::patch('/{appointment}', [AdminAppointmentsController::class, 'update']);
        });

        Route::prefix('doctors')->group(function () {
            Route::delete('/{doctor}', [DoctorsController::class, 'destroy']);
            Route::post('/store', [DoctorsController::class, 'store']);
        });
    });
});
