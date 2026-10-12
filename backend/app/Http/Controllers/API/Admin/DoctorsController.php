<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DoctorRequest;
use App\Models\Doctor;
use App\Models\Specialization;

class DoctorsController extends Controller
{
    public function index(){
        try {
            $specializations = Specialization::all();
            return response()->json([
                'success' => true,
                'message' => 'Данные успешно загружены',
                'data' => $specializations
            ], 200);

        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }
    }
    public function store(DoctorRequest $request){
        try {
            $data = $request->validated();
            $doctor = Doctor::create([
                'specialization_id' => $data['specialization_id'],
                'fio' => $data['fio'],
                'isAvailable' => true
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Специалист успешно добавлен',
                'data' => $doctor
            ], 201);
        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }
    }
}
