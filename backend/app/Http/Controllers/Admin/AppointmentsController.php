<?php

namespace App\Http\Controllers\Admin;

use App\Enum\StatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AppointmentsController extends Controller
{
    public function index(){
        $appointments = \App\Models\Appointment::all();
        return view('admin_appointments', compact('appointments'));
    }
    public function store(Request $request, Appointment $appointment){
        $data = $request->validate([
            'status' => ['required', Rule::enum(StatusEnum::class)],
        ]);

//        $appointment->status = $data['status'];
//        $appointment->save();

        $appointment->update([
            'status' => $data['status'],
        ]);
        return redirect()->back();
    }
}
