<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\FeedbackRequest;
use App\Models\Appointment;
use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index(Appointment $appointment){
        try {
            return response()->json([
                'success' => true,
                'message' => 'Успешная загрузка данных',
                'data' => $appointment
            ], 200);

        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }
    }
    public function store(FeedbackRequest $request, Appointment $appointment){
        $isFeedback = Feedback::where('appointment_id', $appointment->id)->exists();
        if($isFeedback){
            return response()->json([
                'success' => false,
                'message' => 'Комментарий уже был оставлен'
            ], 500);
        }
        try {
            $data = $request->validated();
            $feedback = Feedback::create([
                'appointment_id' => $appointment->id,
                'rating' => $data['rating'],
                'comment' => $data['comment'],
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Комментарий оставлен',
                'data' => $feedback
            ], 201);
        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage()
            ], 500);
        }
    }
}
