<?php

use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::middleware('admin')->prefix('admin')->name('admin.')->group(function () {
        Route::prefix('/status')->name('status.')->group(function () {
            Route::get('/', [\App\Http\Controllers\Admin\AppointmentsController::class, 'index'])->name('index');
            Route::post('/{appointment}', [\App\Http\Controllers\Admin\AppointmentsController::class, 'store'])->name('store');
        });
        Route::prefix('/doctors')->name('doctors.')->group(function () {
            Route::get('/', [\App\Http\Controllers\Admin\DoctorsController::class, 'index'])->name('index');
            Route::post('/', [\App\Http\Controllers\Admin\DoctorsController::class, 'store'])->name('store');
        });
    });
});
