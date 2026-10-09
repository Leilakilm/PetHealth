<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    if (!\Illuminate\Support\Facades\Auth::check()) {
        return redirect()->route('home.index');
    }
    if (\Illuminate\Support\Facades\Auth::user()->status === \App\Enum\AccessEnum::admin->value) {
        return redirect()->route('admin.status.index');
    } else {
        return redirect()->route('profile.index');
    }

});
Route::prefix('home')->name('home.')->group(function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('index');
});
Route::middleware('guest')->group(function () {
    Route::prefix('login')->group(function () {
        Route::get('/', [LoginController::class, 'create'])->name('login');
        Route::post('/', [LoginController::class, 'store'])->name('login.store');
    });
    Route::prefix('register')->name('register.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Auth\RegisterController::class, 'create'])->name('create');
        Route::post('/', [\App\Http\Controllers\Auth\RegisterController::class, 'store'])->name('store');
    });
});
Route::middleware('auth')->group(function () {
    Route::post('/logout', [\App\Http\Controllers\Auth\LogoutController::class, 'logout'])->name('logout');
    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/', [\App\Http\Controllers\AppointmentsController::class, 'index'])->name('index');
        Route::post('/{appointment}', [\App\Http\Controllers\AppointmentsController::class, 'delete'])->name('delete');
    });
    Route::prefix('record')->name('record.')->group(function () {
        Route::get('/', [\App\Http\Controllers\RecordController::class, 'create'])->name('create');
        Route::post('/', [\App\Http\Controllers\RecordController::class, 'store'])->name('store');
    });
    Route::prefix('pet')->name('pet.')->group(function () {
        Route::get('/', [\App\Http\Controllers\PetController::class, 'index'])->name('index');
        Route::prefix('add')->name('add.')->group(function () {
            Route::get('/', [\App\Http\Controllers\PetController::class, 'create'])->name('create');
            Route::post('/', [\App\Http\Controllers\PetController::class, 'store'])->name('store');
        });
    });
    Route::prefix('feedback')->name('feedback.')->group(function () {
        Route::get('/{appointment}', [\App\Http\Controllers\FeedbackController::class, 'index'])->name('index');
        Route::post('/{appointment}', [\App\Http\Controllers\FeedbackController::class, 'store'])->name('store');
    });
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
