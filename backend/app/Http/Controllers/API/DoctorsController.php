<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorsController extends Controller
{
    public function index(Request $request){
        $query = Doctor::query()->where('isAvailable', 1);

        if ($specialization = $request->query('specialization')) {
            $query->where('specialization_id', $specialization);
        }

        return response()->json([
            'success' => true,
            'data' => $query->get()
        ]);
    }
}
