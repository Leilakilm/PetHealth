<?php

namespace App\Http\Controllers;

use App\Enum\StatusEnum;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Pet;
use App\Models\Specialization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Logging\OpenTestReporting\Status;

class RecordController extends Controller
{
    public function create(){
        $specializations = Specialization::all();
        $doctors = Doctor::all();
        $pets = Pet::where('user_id', Auth::id())->get();
        $isPets = Pet::where('user_id', Auth::id())->exists();
        return view('record', compact('specializations', 'doctors', 'pets', 'isPets'));
    }
    public function store(Request $request){
        $data = request()->validate([
            'specialization' => ['required', 'string', 'max:255', 'exists:specializations,id'],
            'pet' => ['required', 'string', 'max:255', 'exists:pets,id'],
            'date' => ['required', 'date', 'after:today'],
        ]);
        $doctor_id = Doctor::where('specialization_id', $data['specialization'])->first()->id;
        Appointment::create([
            'doctor_id' => $doctor_id,
            'pet_id' => $data['pet'],
            'date' => $data['date'],
            'status' => StatusEnum::new->value,
        ]);
        return redirect()->route('profile.index');
    }
}
