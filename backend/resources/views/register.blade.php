@extends('layouts.main')


@section('title', 'Регистрация')
@section('content')
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h3 class="mb-4 text-3xl font-bold m-0 text-slate-800">Регистрация</h3>
            <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">На этой странице вы создаёте
                личный кабинет, чтобы записывать питомцев к ветеринару онлайн. Укажите имя, email, телефон и придумайте
                пароль — это займёт меньше минуты, а регистрация полностью бесплатна. После создания аккаунта вы сможете
                добавить питомцев, выбирать врача и направление, а также управлять своими записями.</p>
            <p class="mb-3 text-slate-500">Уже есть аккаунт? <a class="text-orange-600 underline" href="{{route('login')}}">Вход</a></p>
        </div>
        <div class="w-full">
            <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">Заполните форму, чтобы создать личный кабинет и записывать питомцев на приём.</h5>
            <form method="POST" action="{{ route('register.store') }}" class="space-y-5">
                @csrf
                <div>
                    <label for="name" class="block text-sm font-medium text-slate-800 mb-1">
                        Имя
                    </label>
                    <input type="text"
                           id="name"
                           name="name"
                           value="{{ old('name') }}"
                           placeholder="Введите ваше имя.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('name') border-red-500 @enderror">
                    @error('name')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-slate-800 mb-1">
                        Email
                    </label>
                    <input type="email"
                           id="email"
                           name="email"
                           value="{{ old('email') }}"
                           placeholder="Введите ваш email.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('email') border-red-500 @enderror">
                    @error('email')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium text-slate-800 mb-1">
                        Телефон
                    </label>
                    <input type="text"
                           id="phone"
                           name="phone"
                           value="{{ old('phone') }}"
                           placeholder="8(XXX)XXX-XX-XX"
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('phone') border-red-500 @enderror">
                    @error('phone')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-slate-800 mb-1">
                        Пароль
                    </label>
                    <input type="password"
                           id="password"
                           name="password"
                           required
                           placeholder="Введите пароль.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('password') border-red-500 @enderror">
                    @error('password')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                    @enderror
                </div>
                <div>
                    <label for="password_confirmation" class="block text-sm font-medium text-slate-800 mb-1">
                        Повторите пароль
                    </label>
                    <input type="password"
                           id="password_confirmation"
                           name="password_confirmation"
                           required
                           placeholder="Введите пароль снова.."
                           class="@error('password_confirmation') border-red-500 @enderror focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition">
                </div>

                <button type="submit"
                        class="w-full border-1 border-orange-600 bg-slate-600orange-600 hover:border-orange-200 hover:bg-orange-600 active:bg-orange-600
                               text-orange-600 py-2.5
                               transition duration-200">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    </div>

@endsection
