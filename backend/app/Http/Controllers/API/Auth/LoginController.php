<?php

namespace App\Http\Controllers\API\Auth;

use App\Enum\AccessEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function store(LoginRequest $request)
    {
        try {
            $data = $request->validated();
            if (Auth::attempt($data)) {
                $user = Auth::user();
                $request->session()->regenerate();

                return response()->json([
                    'success' => true,
                    'message' => 'Вход успешно завершен',
                    'user' => $user,
                ], 200);
            }
            return response()->json([
                'success' => false,
                'message' => 'Неверный логин или пароль'
            ], 401);
        } catch (\Exception $error) {
            DB::rollBack();
            Log::error('Login error: ' . $error->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Ошибка авторизации'
            ], 500);
        }
    }
}
