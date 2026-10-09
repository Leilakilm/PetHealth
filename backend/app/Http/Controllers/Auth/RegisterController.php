<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function create(){
        return view('register');
    }
    public function store(Request $request){
        $data = $request->validate([
           'name' => ['required', 'string', 'min:5', 'max:255'],
           'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
           'phone' => ['required', 'string', 'max:255', 'unique:users', 'regex:/^\+?[78]?[ ]?[ (-.\/]?\d{3}[ (-.\/]?[ ]?\d{3}[ -.\/]?\d{2}[ -.\/]?\d{2}$/'],
           'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        $user = User::create($data);

        return redirect()->route('login');
    }
}
