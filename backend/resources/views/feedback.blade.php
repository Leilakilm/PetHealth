@extends('layouts.main')


@section('title', 'Отзыв')
@section('content')
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h3 class=" text-3xl font-bold m-0 text-slate-800">Отзыв об оказанной услуге
                питомцу</h3>
            <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">{{$appointment->pet->name}} <span
                    class="text-sm ">{{\Carbon\Carbon::parse($appointment->date)->translatedFormat('d.m.Y')}}</span>
            </h5>
            <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">На этой странице вы оставляете
                отзыв о приёме, который уже прошёл. Поставьте оценку от 0 до 5 и поделитесь впечатлениями — это поможет
                другим владельцам выбрать врача, а нам стать лучше. Отзыв будет опубликован после проверки и появится
                в карточке специалиста. При желании вы можете вернуться к истории болезни питомца по ссылке ниже.</p>
            <p class="block text-sm w-full md:w-2/3 font-medium text-slate-500">Просмотреть <a
                    class="underline text-orange-600" href="{{route('profile.index')}}">историю болезни</a>.</p>
        </div>
        <div class="w-full">
            @if(!$isFeedback)
                <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">Заполните форму, чтобы
                    оставить отзыв об оказанной услуге. Отзыв будет опубликован после модерации.</h5>
                <form method="POST" action="{{ route('feedback.store', $appointment) }}" class="space-y-5">
                    @csrf
                    <div>
                        <label for="rating" class="block text-sm font-medium text-slate-800 mb-1">
                            Оценка
                        </label>
                        <input type="number"
                               id="rating"
                               name="rating"
                               value="{{ old('rating') }}"
                               required
                               autofocus
                               placeholder="Оценка от 0 до 5.."
                               class="focus:text-orange-600 w-full px-4 py-2.5 border border-slate-300
                                  focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
                                  transition @error('rating') border-red-500 @enderror">
                        @error('rating')
                        <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="comment" class="block text-sm font-medium text-slate-800 mb-1">
                            Комментарий
                        </label>
                        <textarea id="comment"
                                  name="comment"
                                  class="focus:text-orange-600 w-full px-4 py-2.5 border border-slate-300
                 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
                 transition @error('comment') border-red-500 @enderror">{{ old('comment') }}</textarea>
                        @error('comment')
                        <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <button type="submit"
                            class="w-full border-1 border-orange-600 bg-slate-600orange-600 hover:border-orange-200 hover:bg-orange-600 active:bg-orange-600
                               text-orange-600 py-2.5
                               transition duration-200">
                        Оствить отзыв
                    </button>
                </form>
            @else
                <label for="rating" class="block text-sm font-medium text-slate-800 mb-1">
                    <h3 class="mb-4 text-lg font-bold m-0 text-slate-800">Вы уже остаили отзыв</h3>
                    <h6 class="font-bold text-lg">{{$appointment->pet->user->name}} {{$appointment->feedback->rating}}⭐</h6>
                    <p>{{$appointment->feedback->comment}}</p>
                    <p class="text-slate-500">дата
                        осмотра: {{\Carbon\Carbon::parse($appointment->date)->translatedFormat('d.n.Y')}}</p>
                </label>
            @endif
        </div>
    </div>
@endsection
