<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RecordRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'specialization' => ['required', 'string', 'max:255', 'exists:specializations,id'],
            'pet' => ['required', 'string', 'max:255', 'exists:pets,id'],
            'date' => ['required', 'date', 'after:today'],
        ];
    }
}
