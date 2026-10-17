<?php

namespace App\Http\Controllers\API;

use App\Enum\StatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\RecordRequest;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Pet;
use App\Models\Specialization;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Logging\OpenTestReporting\Status;

class RecordController extends Controller
{
    public function index()
    {
        try {
            $specializations = Specialization::all();
            $doctors = Doctor::all();
            $pets = Pet::where('user_id', Auth::id())->get();

            return response()->json([
                'success' => true,
                'message' => 'Успешно получены данные для записи',
                'data' => [
                    'specializations' => $specializations,
                    'doctors' => $doctors,
                    'pets' => $pets
                ]
            ], 200);


        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }

    }

    public function store(RecordRequest $request)
    {
        try {
            $data = $request->validated();

            $date = Carbon::parse($data['date']);

            $exists = Appointment::where('doctor_id', $data['doctor_id'])
                ->where('date', $date)
                ->where('status', '!=', StatusEnum::rejected->value)
                ->exists();

            if ($exists) {
                return response()->json([
                    'success' => false,
                    'message' => 'Это время уже занято',
                    'errors' => ['date' => ['Это время уже занято, выберите другое']],
                ], 422);
            }

            $appointment = Appointment::create([
                'doctor_id' => $data['doctor_id'],
                'pet_id' => $data['pet_id'],
                'date' => $date,
                'status' => StatusEnum::new->value
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Заявка создана',
                'data' => $appointment,
            ], 201);

        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);

        }
    }
}
