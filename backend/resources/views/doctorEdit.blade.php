@extends('layouts.main')


@section('title', 'Специалист')
@section('content')
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h3 class=" mb-4 text-3xl font-bold m-0 text-slate-800">Добавить специалиста</h3>
            <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">На этой странице вы добавляете
                нового ветеринарного специалиста в систему клиники. Укажите ФИО врача и выберите его
                специализацию из списка направлений — эти данные определят, в каком разделе сайта он будет отображаться
                и на какие приёмы его смогут записывать владельцы питомцев. После сохранения специалист сразу появится в
                общем списке врачей и станет доступен для онлайн-записи.</p>
        </div>
        <div class="w-full">
            <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">Заполните карточку врача, чтобы он появился в списке специалистов и был доступен для записи.</h5>
            <form method="POST" action="{{ route('admin.doctors.store') }}" class="space-y-5">
                @csrf
                <div>
                    <label for="fio" class="block text-sm font-medium text-slate-800 mb-1">
                        Email
                    </label>
                    <input type="text"
                           id="fio"
                           name="fio"
                           value="{{ old('fio') }}"
                           placeholder="Введите ваш ФИО.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('fio') border-red-500 @enderror">
                    @error('fio')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="specialization" class="block text-sm font-medium text-slate-800 mb-1">
                        Специализация
                    </label>
                    <select id="specialization"
                            name="specialization_id"
                            class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('specialization_id') border-red-500 @enderror">
                        <option selected disabled>Выберите направление..</option>
                        @foreach($specializations as $specialization)
                            <option value="{{$specialization->id}}">{{$specialization->name}}</option>
                        @endforeach
                    </select>
                    @error('specialization_id')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <button type="submit"
                        class="w-full border-1 border-orange-600 bg-slate-600orange-600 hover:border-orange-200 hover:bg-orange-600 active:bg-orange-600
                               text-orange-600 py-2.5
                               transition duration-200">
                    Добавить
                </button>
            </form>
        </div>
    </div>
@endsection
