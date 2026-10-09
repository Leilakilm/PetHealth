@extends('layouts.main')

@section('title', 'Питомцы')
@section('content')
    <div class="">
        <div class="mb-5">
            <h3 class="text-3xl font-bold m-0 text-slate-800 ">Мои питомцы</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 justify-between">
                <div>
                    <h5 class="text-lg font-bold m-0 text-slate-800">Основное</h5>
                    <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-1">На этой странице
                        отображаются все питомцы, которых вы добавили в личный кабинет. Здесь вы можете проверить их
                        данные, отредактировать информацию или записать любого питомца на приём к ветеринару. Если
                        питомец ещё не добавлен, воспользуйтесь кнопкой ниже. Все записи и история визитов по каждому
                        питомцу доступны в его карточке.</p>
                </div>
                <div class="mr-auto flex flex-col">
                    <h5 class="text-lg font-bold m-0 text-slate-800">Важно</h5>
                    <p class="mt-2 block text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">Если вы не
                        нашли нужную запись или заметили ошибку в данных, пожалуйста, свяжитесь с администратором
                        клиники.</p>
                </div>
            </div>
        </div>
        @if(!$isAppointment)
            <p class="block text-sm font-medium text-slate-500 mb-1">У вас пока нет зарегистрированных питомцев <a class="underline text-orange-600" href="{{route('pet.add.create')}}">Зарегистрировать питомца</a></p>
        @else
            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                @foreach($pets as $pet)
                    <div class=" lg:gap-10 border-1 p-4 border-slate-600">
                        <div class="">
                            <div>
                                <p class="block text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">Питомец</p>
                                <h4 class="text-slate-800 text-xl font-bold">{{$pet->name}}</h4>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">
                                            Вид: </p>
                                        <p class="text-slate-500">{{$pet->species}}</p>
                                    </div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Возвраст: </p>
                                        <p class="text-slate-500">{{$pet->age}} лет</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="my-3">
                                        <a href="{{route('record.create')}}" class="font-semibold mb-0 block text-sm text-orange-600 underline">Записать на прием</a>
                                    </div>
                                    <div class="my-3">
                                        <p class="font-semibold mb-0 block text-sm text-slate-800 mb-1">Записей на прием: </p>
                                        <p class="text-slate-500">{{$pet->appointments_count}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endif
    </div>
@endsection
