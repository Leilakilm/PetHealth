<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class PetRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'    => ['required', 'string', 'min:2', 'max:255'],
            'species' => ['required', 'string', 'min:2', 'max:255'],
            'age'     => ['required', 'integer', 'min:0', 'max:100'],
        ];
    }
}
