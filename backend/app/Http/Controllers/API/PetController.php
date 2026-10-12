<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PetRequest;
use App\Models\Appointment;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PetController extends Controller
{
    public function index(){
        try {
            $pets = Pet::where('user_id', auth()->id())
                ->withCount('appointments')
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'Успешно получен список питомцев',
                'data' => $pets,
            ]);
        } catch (\Throwable $error){
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ], 500);
        }

    }
    public function store(PetRequest $request){
        try {
            $data = $request->validated();

            $pet = Pet::create([
                'user_id' => auth()->id(),
                'name' => $data['name'],
                'species' => $data['species'],
                'age' => $data['age'],
            ]);
            return response()->json([
               'success' => true,
               'message' => 'итомец успешно зарегистрирован',
                'data' => $pet,
            ], 201);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }

    }
}
