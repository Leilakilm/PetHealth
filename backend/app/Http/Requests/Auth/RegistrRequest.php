<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RegistrRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:5', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'string', 'max:255', 'unique:users', 'regex:/^\+?[78]?[ ]?[ (-.\/]?\d{3}[ (-.\/]?[ ]?\d{3}[ -.\/]?\d{2}[ -.\/]?\d{2}$/'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }
}
