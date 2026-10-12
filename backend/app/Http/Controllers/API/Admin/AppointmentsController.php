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
    public function index()
    {
        try {
            $appointments = Appointment::all();
            return response()->json([
                'success' => true,
                'message' => 'Список заявок получен',
                'data' => $appointments
            ], 200);
        } catch (\Exception $error) {
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
            ], 500);
        }
        try {
            $data = $request->validated();

            $appointment->update([
                'status' => $data['status'],
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Статус заявки успешно изменен'
            ], 200);
        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }

    }
}
