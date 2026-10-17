<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function logout(Request $request)
    {

        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Пользователь не авторизован',
            ], 401);
        }

        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'Выход выполнен успешно',
        ]);


    }
}
