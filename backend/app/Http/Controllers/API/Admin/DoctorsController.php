<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DoctorRequest;
use App\Models\Doctor;
use App\Models\Specialization;

class DoctorsController extends Controller
{
    public function index()
    {
        $data = Doctor::query()->where('isAvailable', 1)->with('specialization')->get();

        $formattedData = $data->map(function ($doctor) {
            return [
                'id' => $doctor->id,
                'fio' => $doctor->fio,
                'isAvailable' => $doctor->isAvailable,
                'specialization' => $doctor->specialization,
                'created_at' => $doctor->created_at ? $doctor->created_at->format('d.m.Y') : null,
                'updated_at' => $doctor->updated_at ? $doctor->updated_at->format('d.m.Y') : null,
            ];
        });
        return response()->json([
            'success' => true,
            'data' => $formattedData,
        ]);
    }
    public function destroy(Doctor $doctor){
        try {
            $doctor->update([
                'isAvailable' => 0
            ]);

            return response()->json([
               'success' => true,
               'message' => 'Специалист больше не доступен для записи',
            ]);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ], 500);
        }
    }
    public function getSpecializations()
    {
        $data = Specialization::all();
        return response()->json([
            'success' => true,
            'message' => 'Данные успешно загружены',
            'data' => $data,
        ]);
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
