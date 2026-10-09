<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'doctor_id',
        'pet_id',
        'date',
        'status'
    ];
    public function doctor(){
        return $this->belongsTo(Doctor::class);
    }
    public function pet(){
        return $this->belongsTo(Pet::class);
    }
    public function feedback(){
        return $this->hasOne(Feedback::class);
    }
}
