<?php

namespace App\Http\Controllers\API;

use App\Enum\StatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Feedback;
use App\Models\Pet;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppointmentsController extends Controller
{
    public function index()
    {
        try {
            $pets = Pet::where('user_id', auth()->id())->pluck('id');

            $appointments = Appointment::whereIn('pet_id', $pets)
                ->with(['pet', 'doctor.specialization'])
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'Успешно получены данные заявок на прием',
                'data' => $appointments,
            ]);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, Appointment $appointment)
    {
        $owned = Appointment::where('id', $appointment->id)
            ->whereHas('pet', function ($query) {
                $query->where('user_id', auth()->id());
            })->exists();

        if (!$owned) {
            return response()->json([
                'success' => false,
                'message' => 'Нет доступа к этой записи',
            ], 403);
        }
        if ($appointment->status === StatusEnum::rejected->value){
            return response()->json([
               'success' => false,
               'message' => 'Прием уже был отменен ранее'
            ], 500);
        }
        try {
            DB::beginTransaction();

            $appointment->feedback()->delete();
            $appointment->update([
                'status' => StatusEnum::rejected->value
            ]);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Успешная отмена приема',
            ], 200);

        } catch (\Exception $error) {

            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ], 500);
        }
    }
}
