<?php

namespace App\Http\Controllers\API;

use App\Enum\StatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function slots(Request $request, Doctor $doctor)
    {
        $request->validate([
            'date' => ['required', 'date_format:Y-m-d', 'after_or_equal:today'],
        ]);

        $date = Carbon::parse($request->query('date'));
        $dayOfWeek = $date->dayOfWeekIso;

        $schedule = Schedule::where('doctor_id', $doctor->id)
            ->where('day_of_week', $dayOfWeek)
            ->first();

        if (!$schedule) {
            return response()->json([
                'success' => true,
                'data' => [],
            ]);
        }

        $slotDuration = (int) $schedule->slot_duration;

        $start = $date->copy()->setTimeFromTimeString($schedule->start_time);
        $end = $date->copy()->setTimeFromTimeString($schedule->end_time);

        $slots = [];
        $current = $start->copy();
        while ($current->lt($end)) {
            $slots[] = $current->format('H:i');
            $current->addMinutes($slotDuration);
        }

        $busy = Appointment::where('doctor_id', $doctor->id)
            ->whereDate('date', $date->toDateString())
            ->where('status', '!=', StatusEnum::rejected->value)
            ->pluck('date')
            ->map(fn ($d) => Carbon::parse($d)->format('H:i'))
            ->toArray();

        $free = array_values(array_diff($slots, $busy));

        if ($date->isToday()) {
            $now = Carbon::now();
            $free = array_values(array_filter($free, function ($slot) use ($date, $now) {
                return Carbon::parse($date->toDateString() . ' ' . $slot)->gt($now);
            }));
        }

        return response()->json([
            'success' => true,
            'data'    => $free,
        ]);
    }
}
