@extends('layouts.main')


@section('title', 'Вход')
@section('content')
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h3 class="mb-4 text-3xl font-bold m-0 text-slate-800">Вход</h3>
            <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">На этой странице вы входите в
                личный кабинет, чтобы управлять питомцами и записями. Введите email и пароль, указанные при регистрации,
                и вы получите доступ к своим приёмам, истории визитов и данным питомцев. Если вы ещё не
                зарегистрированы, создайте аккаунт по ссылке ниже — это займет меньше минуты.</p>
            <p class="text-slate-500">Еще нет аккаунта? <a class="text-orange-600 underline" href="{{route('register.create')}}">Регистрация</a></p>
        </div>
        <div class="w-full">
            <h5 class="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">Войдите в личный кабинет, чтобы записывать питомцев на приём и управлять своими записями.</h5>
            <form method="POST" action="{{ route('login') }}" class="space-y-5">
                @csrf
                <div>
                    <label for="email" class="block text-sm font-medium text-slate-800 mb-1">
                        Email
                    </label>
                    <input type="email"
                           id="email"
                           name="email"
                           value="{{ old('email') }}"
                           required
                           placeholder="Введите ваш email.."
                           class="focus:text-orange-600 w-full py-2.5 border focus:outline-none focus:border-b-orange-600 border-slate-200 border-b-slate-300 focus:border-transparent transition @error('email') border-red-500 @enderror">
                    @error('email')
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

                <button type="submit"
                        class="w-full border-1 border-orange-600 bg-slate-600orange-600 hover:border-orange-200 hover:bg-orange-600 active:bg-orange-600
                               text-orange-600 py-2.5
                               transition duration-200">
                    Авторизоваться
                </button>
            </form>
        </div>
    </div>
@endsection
