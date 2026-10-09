<?php

namespace App\Http\Controllers\Auth;

use App\Enum\AccessEnum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function create()
    {
        return view('login');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);
        if (!Auth::attempt($data)) {
            return back()->withErrors(['Ошибка при авторизации']);
        }
        if (AccessEnum::admin->value === Auth::user()->status){
            return redirect()->route('admin.status.index');
        }
        return redirect()->route('profile.index');
    }
}
