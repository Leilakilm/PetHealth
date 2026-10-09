<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $isAuth = Auth::check();

        return view('home', compact('isAuth'));
    }
}
