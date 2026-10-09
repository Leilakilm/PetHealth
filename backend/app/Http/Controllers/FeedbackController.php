<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index(Appointment $appointment){
        $isFeedback = Feedback::where('appointment_id', $appointment->id)->exists();
        return view('feedback', compact('appointment', 'isFeedback'));
    }
    public function store(Request $request, Appointment $appointment){
        $data = $request->validate([
            'rating' => ['required', 'integer', 'min:0', 'max:5'],
            'comment' => ['required', 'string', 'min:3', 'max:255']
        ]);
        $feedback = Feedback::create([
            'appointment_id' => $appointment->id,
            'rating' => $data['rating'],
            'comment' => $data['comment'],
        ]);
        return redirect()->route('profile.index');
    }
}
