@extends('layouts.main')

@section('title', 'Личный кабинет')
@section('content')
    <div class="">
        <div class="mb-5">
            <h3 class="text-3xl font-bold m-0 text-slate-800 ">История болезней и записи к врачам</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 justify-between">
                <div>
                    <h3 class="text-lg font-bold m-0 text-slate-800">Основное</h3>
                    <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-1">В этом разделе
                        отображается полная история посещений ветеринарной клиники для всех ваших питомцев. Здесь вы
                        можете отслеживать статус текущих записей, просматривать данные о прошедших приемах, а также
                        управлять
                        расписанием.</p>
                </div>
                <div class="mr-auto flex flex-col">
                    <h3 class="text-lg font-bold m-0 text-slate-800">Важно</h3>
                    <p class="mt-2 block text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">Если вы не
                        нашли нужную запись или заметили ошибку в данных, пожалуйста, свяжитесь с администратором
                        клиники.</p>
                </div>
            </div>
        </div>
        @if(!$isAppointment)
            <p class="block text-sm font-medium text-slate-500 mb-1">У вас пока нет записей</p>
        @else
            <div class=" grid grid-cols-1 md:grid-cols-3 gap-4">
                @foreach($appointments as $appointment)
                    <div class="grid grid-cols-1 lg:grid-cols-7 gap-2 lg:gap-10 border-1 p-4 border-slate-600">

                        <div class="lg:col-span-5 min-w-0">
                            <div class="flex flex-wrap gap-2 justify-between lg:justify-start mb-4">
                                <h4 class="text-slate-800 text-xl font-bold">{{$appointment->pet->name}}</h4>
                                <span
                                    class="text-center border-1 text-orange-600 border-b-orange-600 px-3 py-1 break-words text-sm">
                                {{$appointment->status}}
                            </span>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">
                                            Направление: </p>
                                        <p class="text-slate-500">{{$appointment->doctor->specialization->name}}</p>
                                    </div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Доктор: </p>
                                        <p class="text-slate-500">{{$appointment->doctor->fio}}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Желаемая
                                            дата: </p>
                                        <p class="text-slate-500">{{\Carbon\Carbon::parse($appointment->date)->translatedFormat('d.n.Y')}}</p>
                                    </div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Желаемое
                                            время: </p>
                                        <p class="text-slate-500">{{\Carbon\Carbon::parse($appointment->date)->translatedFormat('H:i')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-2 min-w-0 flex flex-col">
                            <div class="w-full flex flex-col gap-1 h-full">
                                @if($appointment->status === \App\Enum\StatusEnum::finished->value)
                                    <a href="{{route('feedback.index', $appointment)}}" class=" text-center  border-1 border-slate-600 bg-slate-600orange-600 hover:text-slate-200 hover:border-slate-200 hover:bg-slate-600 active:bg-slate-600
                               text-slate-600 px-3 py-1 break-words text-sm">
                                        отзыв
                                    </a>
                                @else
                                    <span class="text-center  border-1 cursor-not-allowed opacity-50 border-slate-600 bg-slate-600orange-600 hover:text-slate-200 hover:border-slate-200 hover:bg-slate-600 active:bg-slate-600
                               text-slate-600 px-3 py-1 break-words text-sm">
                                    отзыв
                                </span>
                                @endif
                                @if(\App\Enum\StatusEnum::rejected->value !== $appointment->status)
                                    <div class="">
                                        <form action="{{route('profile.delete', ['appointment' => $appointment->id])}}"
                                              method="post">
                                            @csrf
                                            <button
                                                type="submit"
                                                class="w-full text-center border-1 text-red-600 border-red-600 px-3 py-1 break-words text-sm ">
                                                Отменить запись
                                            </button>
                                        </form>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endif
    </div>
@endsection
