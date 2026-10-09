<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Specialization;
use Illuminate\Http\Request;

class DoctorsController extends Controller
{
    public function index(){
        $specializations = Specialization::all();
        return view('doctorEdit', compact('specializations'));
    }
    public function store(Request $request){
        $data = $request->validate([
            'specialization_id' => ['required', 'exists:specializations,id'],
            'fio' => ['required', 'string', 'max:255'],
        ]);
        Doctor::create([
            'specialization_id' => $data['specialization_id'],
            'fio' => $data['fio'],
            'isAvailable' => true
        ]);
        return redirect()->route('admin.doctors.index');
    }
}
