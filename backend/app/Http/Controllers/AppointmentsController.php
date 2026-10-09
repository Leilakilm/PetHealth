<?php

namespace App\Http\Controllers;

use App\Enum\StatusEnum;
use App\Models\Appointment;
use App\Models\Feedback;
use App\Models\Pet;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    public function index(){
        $user_id = auth()->user()->id;
        $pets = Pet::where('user_id', $user_id)->get();
        $pets_id = $pets->pluck('id');

        $appointments = Appointment::whereIn('pet_id', $pets_id)->with(['pet', 'doctor'])->get();
        $isAppointment = Appointment::whereIn('pet_id', $pets_id)->exists();
        return view('appointments', compact('appointments', 'isAppointment'));
    }
    public function delete(Appointment $appointment){
        $appointment->feedback()->delete();
        $appointment->update([
           'status' => StatusEnum::rejected->value
        ]);

        return redirect()->back();
    }
}
