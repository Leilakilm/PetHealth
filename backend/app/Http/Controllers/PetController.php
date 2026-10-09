<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index(){
        $user_id = auth()->user()->id;
        $pets = Pet::where('user_id', $user_id)->withCount('appointments')->get();
        $pets_id = $pets->pluck('id');

        $appointments = Appointment::whereIn('pet_id', $pets_id)->with(['pet', 'doctor'])->get();
        $isAppointment = Appointment::whereIn('pet_id', $pets_id)->exists();
        return view('pets', compact('pets', 'appointments', 'isAppointment'));
    }
    public function create(){
        return view('petEdit');
    }
    public function store(Request $request){
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'species' => ['required', 'string', 'max:255'],
            'age' => ['required', 'integer'],
        ]);

        $pet = Pet::create([
            'user_id' => auth()->id(),
            'name' => $data['name'],
            'species' => $data['species'],
            'age' => $data['age'],
        ]);

        return redirect()->route('record.create');
    }
}
