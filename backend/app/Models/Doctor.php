<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = [
        'specialization_id',
        'fio',
        'isAvailable',
    ];
    public function appointments(){
        return $this->hasMany(Appointment::class);
    }
    public function specialization()
    {
        return $this->belongsTo(Specialization::class);
    }
}
