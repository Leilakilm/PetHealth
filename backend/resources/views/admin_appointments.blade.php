@extends('layouts.main')


@section('title', 'История болезней')
@section('content')
    <div class="">
        <div class="">
            <h3 class="text-3xl font-bold m-0 text-slate-800 ">Управление заявками и история приемов</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 justify-between">
                <div>
                    <h3 class="text-lg font-bold m-0 text-slate-800">Основное</h3>
                    <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-1">В данном разделе
                        отображается реестр всех заявок на прием. Вы можете просматривать детали визитов, изменять их
                        статусы, а также корректировать данные владельцев и питомцев..</p>
                </div>
                <div class="mr-auto flex flex-col">
                    <h3 class="text-lg font-bold m-0 text-slate-800">Важно</h3>
                    <p class="mt-2 block text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">Перед
                        подтверждением заявки убедитесь в доступности выбранного времени у врача.</p>
                </div>
            </div>
        </div>
        <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            @foreach($appointments as $appointment)
                <div class="grid grid-cols-1 md:grid-cols-2 justify-between border-1 p-4    border-slate-600">
                    <div>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <h4 class="text-slate-800 text-xl font-bold">
                                Владелец: {{$appointment->pet->user->name}}</h4>
                            <span
                                class="   border-1 text-orange-600 border-b-orange-600 px-3 py-1">{{$appointment->status}}</span>
                        </div>

                        <div class="mt-4 grid grid-cols-2 gap-2 md:gap-5 ld:gap-10 justify-between gap-7">
                            <div>
                                <div class="my-3">
                                    <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Направление: </p>
                                    <p class="text-slate-500">{{$appointment->doctor->specialization->name}}</p>
                                </div>
                                <div class="my-3">
                                    <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Доктор: </p>
                                    <p class="text-slate-500">{{$appointment->doctor->fio}}</p>
                                </div>
                                <div class="my-3">
                                    <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Желаемая дата: </p>
                                    <p class="text-slate-500">{{\Carbon\Carbon::parse($appointment->date)->translatedFormat('d.n.Y')}}</p>
                                </div>
                                <div class="my-3">
                                    <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Желаемое время: </p>
                                    <p class="text-slate-500">{{\Carbon\Carbon::parse($appointment->date)->translatedFormat('H:i')}}</p>
                                </div>
                            </div>
                            <div>
                                <div class="my-3">
                                    <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Питомец: </p>
                                    <p class="text-slate-500">{{$appointment->pet->name}}</p>
                                </div>
                                <div class="my-3">
                                    <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Вид: </p>
                                    <p class="text-slate-500">{{$appointment->pet->species}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex ml-auto md:w-4/5">
                        <form action="{{route('admin.status.store', $appointment)}}" method="post">
                            @csrf
                            <select class="w-full text-slate-600 border-slate-300 px-3 py-1 border-1
                                  focus:outline-none focus:ring-1 focus:text-orange-600
                                  transition @error('status') border-red-500 @enderror" name="status">
                                @foreach(\App\Enum\StatusEnum::cases() as $status)
                                    <option value="{{$status->value}}">{{$status->value}}</option>
                                @endforeach
                            </select>
                            @error('status')
                            <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                            <button type="submit"
                                    class="mt-2 w-full border-1 border-slate-600 bg-slate-600orange-600 hover:text-slate-200 hover:border-slate-200 hover:bg-slate-600 active:bg-slate-600
                               text-slate-600 px-3 py-1
                               transition duration-200">
                                Изменить
                            </button>
                        </form>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
