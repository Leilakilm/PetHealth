@extends('layouts.main')


@section('title', 'Регистрация питомца')
@section('content')
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h3 class=" mb-4 text-3xl font-bold m-0 text-slate-800">Регистрация питомца</h3>
            <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">На этой странице вы добавляете
                нового питомца в личный кабинет владельца. Укажите имя, вид и возраст животного — эти данные помогут
                ветеринару подготовиться к приёму и подобрать правильный подход. После сохранения питомец появится в
                вашем профиле, и его можно будет записать на приём к нужному специалисту. Изменить или дополнить
                информацию о питомце можно в любой момент в разделе управления питомцами.</p>
            <p class="block text-sm w-full md:w-2/3 font-medium text-slate-500">Просмотреть <a
                    class="underline text-orange-600" href="">список своих питомцев</a>.</p>
        </div>
        <div class="w-full">
            <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">Заполните карточку питомца, чтобы он появился в списке доступных для записи на прием.</h5>
            <form method="POST" action="{{ route('pet.add.store') }}" class="space-y-5">
                @csrf
                <div>
                    <label for="name" class="block text-sm font-medium text-slate-800 mb-1">
                        Имя
                    </label>
                    <input type="text"
                           id="name"
                           name="name"
                           value="{{ old('name') }}"
                           required
                           autofocus
                           placeholder="Введите имя питомца.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('name') border-red-500 @enderror">
                    @error('name')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="name" class="block text-sm font-medium text-slate-800 mb-1">
                        Вид
                    </label>
                    <input type="text"
                           id="species"
                           name="species"
                           value="{{ old('species') }}"
                           required
                           autofocus
                           placeholder="Введите вид питомца.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('species') border-red-500 @enderror">
                    @error('species')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="age" class="block text-sm font-medium text-slate-800 mb-1">
                        Возраст
                    </label>
                    <input type="number"
                           id="age"
                           name="age"
                           value="{{ old('age') }}"
                           required
                           autofocus
                           placeholder="Введите возраст питомца.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('age') border-red-500 @enderror">
                    @error('age')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <button type="submit"
                        class="w-full border-1 border-orange-600 bg-slate-600orange-600 hover:border-orange-200 hover:bg-orange-600 active:bg-orange-600
                               text-orange-600 py-2.5
                               transition duration-200">
                    Зарегистрировать
                </button>
            </form>
        </div>
    </div>
@endsection
