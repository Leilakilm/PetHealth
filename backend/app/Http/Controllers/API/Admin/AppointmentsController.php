<?php

namespace App\Http\Controllers\API\Admin;

use App\Enum\StatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AppointmentsControlRequest;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AppointmentsController extends Controller
{
    public function index(Request $request)
    {
        try {
            $query =  Appointment::with(['pet.user', 'doctor.specialization']);

            if ($status = $request->query('status')) {
                $query->where('status', $status);
            }

            $appointments = $query->get();

            $priority = [
              StatusEnum::new->value => 1,
              StatusEnum::waiting->value => 2,
              StatusEnum::finished->value => 3,
              StatusEnum::rejected->value => 4,
            ];

            $appointments = $appointments->sortBy(function ($appointment) use ($priority) {
                return $priority[$appointment->status] ?? 999;
            })->values();

            return response()->json([
                'success' => true,
                'message' => 'Список заявок получен',
                'data' => $appointments
            ]);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }
    }

    public function update(AppointmentsControlRequest $request, Appointment $appointment)
    {
        if ($appointment->status === StatusEnum::rejected->value) {
            return response()->json([
                'success' => false,
                'message' => 'Прием уже был отменен'
            ], 422);
        }
        try {
            $data = $request->validated();

            $appointment->update([
                'status' => $data['status'],
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Статус заявки успешно изменен',
                'data' => $appointment->fresh(['pet.user', 'doctor.specialization'])
            ]);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }

    }
}
