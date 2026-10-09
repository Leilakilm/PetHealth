<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geologica:wght,CRSV@100..900,0&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>PetHealth - @yield('title', 'Страница')</title>
</head>
<body class="px-5 md:px-0 font-geologica bg-slate-200 flex flex-col min-h-screen">
<header class=" text-slate-800  border-b-1 border-b-slate-500">
    <div class="container mx-auto py-4 flex items-center justify-between">

        <a href="{{route('home.index')}}" class=" text-2xl font-bold m-0 text-shadow-slate-800">PetHealth</a>

        <nav class="hidden md:flex items-center gap-6 text-gray-800 font-medium">
            <a href="{{route('home.index')}}" class="hover:text-orange-600 transition">Главная</a>
            @if(\Illuminate\Support\Facades\Auth::user()?->status === \App\Enum\AccessEnum::admin->value)
                <a href="{{route('admin.doctors.index')}}" class="hover:text-orange-600 transition">Доктора</a>
                <a href="{{route('admin.status.index')}}" class="hover:text-orange-600 transition">История болезней</a>
            @else
                <a href="{{route('record.create')}}" class="hover:text-orange-600 transition">Записаться</a>
                @auth
                    <a href="{{route('pet.add.create')}}" class="hover:text-orange-600 transition">Новый питомец</a>
                @endauth
                <a href="{{route('profile.index')}}" class="hover:text-orange-600 transition">История болезни</a>
            @endif
        </nav>

        <div class="flex items-center gap-4">
            @auth
                @if(\App\Enum\AccessEnum::admin->value !== \Illuminate\Support\Facades\Auth::user()->status)
                    <a href="{{route('pet.index')}}" class="text-gray-800 hover:text-orange-600 transition">Питомцы</a>
                @endif
                <form method="POST" action="{{route('logout')}}">
                    @csrf
                    <button
                        class="border-orange-600 text-orange-600 border-1 hover:text-slate-800 hover:bg-slate-800 px-3 py-1 transition">
                        Выйти
                    </button>
                </form>
            @else
                <a href="{{route('login')}}" class="text-gray-800 hover:text-orange-600 transition">Вход</a>
                <a href="{{route('register.create')}}"
                   class="border-slate-800 border-1 hover:bg-orange-600 px-3 py-1 transition">
                    Регистрация
                </a>
            @endauth
        </div>
    </div>
</header>
<main class="my-10 text-slate-800 container mx-auto flex-1">
    @yield('content')
</main>
<footer class="border-1 border-t-slate-800 border-transparent text-slate-800 text-sm">
    <div class="container mx-auto py-6">

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <a href="{{ route('home.index') }}" class="inline-flex items-center gap-2">
                <span class="font-bold text-xl tracking-tight">PetHealth</span>
            </a>
            <p class=" md:text-right font-semibold text-slate-500">Забота о здоровье ваших питомцев</p>
        </div>

        <div class="grid py-4 grid-cols-1 md:grid-cols-12 gap-12">
            <div class="md:col-span-3">
                <h3 class="font-semibold uppercase">Компания</h3>
                <hr class="bg-slate-800 my-2">
                <ul class="space-y-3">
                    <p class="text-sm text-slate-500">Современная ветеринарная клиника, где опытные врачи, передовое оборудование и искренняя любовь к
                        животным помогают заботиться о здоровье питомцев на каждом этапе их жизни.</p>
                    <li><a href="#main" class="hover:text-orange-500 transition">О нас</a></li>
                </ul>
            </div>
            <div class="md:col-span-3">
                <h3 class="font-semibold uppercase">Сервис</h3>
                <hr class="bg-slate-800 my-2">
                <ul class="space-y-3">
                    <li><a href="{{ route('home.index') }}" class="hover:text-orange-500 transition">Главная</a></li>
                    <li><a href="{{ route('record.create') }}" class="hover:text-orange-500 transition">Записаться</a>
                    </li>
                    <li><a href="{{ route('profile.index') }}" class="hover:text-orange-500 transition">История
                            болезни</a></li>
                    <li><a href="{{ route('pet.add.create') }}" class="hover:text-orange-500 transition">Зарегистрировать
                            питомца</a></li>
                    <li><a href="{{ route('pet.index') }}" class="hover:text-orange-500 transition">Мои питомцы</a></li>
                </ul>
            </div>
            <div class="md:col-span-3">
                <h3 class="font-semibold uppercase">Контакты</h3>
                <hr class="bg-slate-800 my-2">
                <address class="not-italic space-y-2 leading-relaxed">
                    <p>
                        г. Москва, ул. Примерная, 1<br/>
                        Россия
                    </p>
                    <p>
                        <a href="mailto:info@pethealth.ru" class="hover:text-orange-500 transition">
                            info@pethealth.ru
                        </a>
                    </p>
                </address>
            </div>

            <div class="md:col-span-3 flex md:justify-end items-start">
                <div class="border-l border-slate-600 pl-3">
                    <p class="font-medium leading-tight">PetHealth</p>
                    <p class="text-slate-500 leading-tight">Ветеринарная клиника</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</body>
</html>
