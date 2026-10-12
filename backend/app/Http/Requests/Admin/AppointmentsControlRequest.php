<?php

namespace App\Http\Requests\Admin;

use App\Enum\StatusEnum;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AppointmentsControlRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'status' => ['required', Rule::enum(StatusEnum::class)],
        ];
    }
}
