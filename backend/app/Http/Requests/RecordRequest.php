<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'specialization' => ['required', 'integer', 'exists:specializations,id'],
            'pet' => ['required', 'integer', 'exists:pets,id', Rule::exists('pets', 'id')->where('user_id', auth()->id())],
            'date' => ['required', 'date', 'after:today'],
        ];
    }
}
