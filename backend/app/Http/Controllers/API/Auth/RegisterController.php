<?php
namespace App\Http\Controllers\API\Auth;

use App\Enum\AccessEnum;
use App\Enum\StatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegistrRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    public function store(RegistrRequest $request){
        try{
            DB::beginTransaction();

            $data = $request->validated();

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'phone' => $data['phone'],
                'status' => AccessEnum::user->value
            ]);
            DB::commit();

            Auth::login($user);
            $request->session()->regenerate();

            return response()->json([
                'success' => true,
                'message' => 'Регистрация успешно завершена',
                'user' => $user,
            ], 201);

        } catch (\Exception $error) {
            DB::rollBack();
            Log::error('Registration error: ' . $error->getMessage());
            return response()->json([
               'success' => false,
               'message' => $error->getMessage(),
            ], 500);
        }
    }
}
