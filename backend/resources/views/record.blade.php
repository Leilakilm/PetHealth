@extends('layouts.main')


@section('title', 'Запись на прием')
@section('content')
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h3 class=" mb-4 text-3xl font-bold m-0 text-slate-800">Запись на приём</h3>
            <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">На этой странице вы
                записываете своего питомца к ветеринарному специалисту. Выберите нужное направление, питомца из списка и
                удобную дату приёма — система подберет доступное время. После подтверждения запись появится в вашем
                личном кабинете, а мы напомним о визите заранее. Перенести или отменить приём можно в любой момент в
                разделе ваших записей.</p>
            <p class="block text-sm w-full md:w-2/3 font-medium text-slate-500">Просмотреть <a
                    class="underline text-orange-600" href="{{route('profile.index')}}">историю болезни</a>.</p>
        </div>
        <div class="w-full">
            <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">Заполните заявку на прием, чтобы
                мы могли подтвердить вашу запись.</h5>
            <form method="POST" action="{{ route('record.store') }}" class="space-y-5">
                @csrf
                <div>
                    <label for="specialization" class="block text-sm font-medium text-slate-800 mb-1">
                        Направление
                    </label>
                    <select id="specialization"
                            name="specialization"
                            class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('specialization') border-red-500 @enderror">
                        @foreach($specializations as $specialization)
                            <option value="{{$specialization->id}}">{{$specialization->name}}</option>
                        @endforeach
                    </select>
                    @error('specialization')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="pet" class="block text-sm font-medium text-slate-800 mb-1">
                        Питомец
                    </label>
                    <select id="pet"
                            name="pet"
                            class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('pet') border-red-500 @enderror">
                        @if(!$isPets)
                            <option selected disabled>У вас пока нет зарегистрированных питомцев</option>
                        @else
                            <option selected disabled>Выберите питомца..</option>
                        @endif

                        @foreach($pets as $pet)
                            <option value="{{$pet->id}}">{{$pet->name}}</option>
                        @endforeach
                    </select>
                    @error('pet')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                    @if(!$isPets)
                        <p class="text-slate-500 text-sm"><a class="text-orange-600 underline"
                                                             href="{{route('pet.add.create')}}">Регистрация питомца</a>
                        </p>
                    @endif
                </div>
                <div>
                    <label for="date" class="block text-sm font-medium text-slate-800 mb-1">
                        Желаемое время приема
                    </label>
                    <input type="date"
                           id="date"
                           name="date"
                           value="{{ old('date') }}"
                           required
                           autofocus
                           placeholder="Введите ваше имя.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('date') border-red-500 @enderror">
                    @error('date')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <button type="submit"
                        class="w-full border-1 border-orange-600 bg-slate-600orange-600 hover:border-orange-200 hover:bg-orange-600 active:bg-orange-600
                               text-orange-600 py-2.5
                               transition duration-200">
                    Записаться
                </button>
            </form>
        </div>
    </div>
@endsection
