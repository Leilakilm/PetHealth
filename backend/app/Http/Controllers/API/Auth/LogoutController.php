<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function logout(Request $request){
        try{

            if (!Auth::check()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Пользователь не авторизован',
                ], 401);
            }

            Auth::logout();
            $request->session()->invalidate();

            return response()->json([
                'success' => true,
                'message' => 'Выход выполнен успешно'
            ], 200);

        } catch(\Exception $error){
            return response()->json([
                'success' => false,
                'message' => 'Ошибка при выходе',
                'error' => $error->getMessage()
            ], 500);
        }
    }
}
