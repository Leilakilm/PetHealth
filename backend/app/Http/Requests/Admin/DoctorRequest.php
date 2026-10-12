<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class DoctorRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'specialization_id' => ['required', 'exists:specializations,id'],
            'fio' => ['required', 'string', 'max:255', 'unique:doctors,fio'],
        ];
    }
}
