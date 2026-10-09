@extends('layouts.main')


@section('title', 'Главная')
@section('content')
    <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10">
            <div id="main"
                class="col-span-1 md:col-span-2 flex flex-col border-2 border-transparent md:pb-10 md:border-b-slate-800 justify-between">
                <p class="pb-2 block text-sm font-medium text-slate-800">Главная</p>
                <div>
                    <h3 class="text-5xl font-bold m-0 text-slate-800 lg:w-4/5">Ветеринар рядом с вами<span
                            class="text-orange-600">.</span> Онлайн-запись
                        <br> за 2
                        минуты</h3>
                    <p class="mt-2 block text-lg w-full md:w-2/3 font-medium text-slate-500">Зарегистрируйте
                        питомца, выберите направление и удобное время. Без звонков, очередей и лишнего стресса — ни для
                        вас, ни для хвостика.</p>
                </div>
            </div>
            <div class="col-span-1 border-2 border-transparent md:pb-10 md:border-b-slate-800">
                <p class="block text-sm font-medium text-orange-600">01</p>
                <h3 class="text-lg font-bold m-0 text-slate-800">История</h3>
                <div class="flex flex-col gap-4 mt-2">
                    <p class="block text-sm w-full md:w-2/3 font-medium text-slate-500">Так появился
                        онлайн-сервис, объединивший врачей, направления и владельцев в одном месте. Здесь можно
                        зарегистрировать питомца, выбрать специалиста и удобное время, а также хранить историю приёмов и
                        назначений.</p>
                    <p class="block text-sm w-full md:w-2/3 font-medium text-slate-500">Так появился
                        онлайн-сервис, объединивший врачей и владельцев в одном месте. Здесь можно зарегистрировать
                        питомца,
                        выбрать специалиста и время, а также хранить историю приёмов.</p>
                    <p class="block text-sm w-full md:w-2/3 font-medium text-slate-500">Мы продолжаем развивать сервис,
                        чтобы
                        забота о питомцах оставалась простой и доступной.</p>
                </div>
            </div>
            <div class="col-span-1 border-2 border-transparent pb-10 border-b-slate-800">
                <div class="flex flex-col gap-4 justify-between h-full">
                    <div>
                        <p class="block text-sm font-medium text-orange-600">02</p>
                        <h3 class="text-lg font-bold m-0 text-slate-800">Миссия</h3>
                        <p class="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500">Мы делаем заботу о
                            питомцах простой и доступной. Помогаем владельцам быстро находить специалиста и записываться
                            на приём, а врачам сосредоточиться на здоровье животных.</p>
                    </div>
                    <div class="mt-auto ">
                        <p class="block text-sm font-medium text-orange-600">03</p>
                        <h3 class="text-lg font-bold m-0 text-slate-800">Вкладки</h3>
                        <div class="w-full flex flex-col gap-3">
                            <a href="#care"
                               class="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Забота
                                без лишних хлопот</a>
                            <a href="#howTtWorks"
                               class="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Как
                                это работает</a>
                            <a href="#admissionDirections"
                               class="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Направления
                                приема</a>
                            <a href="#"
                               class="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Наши
                                врачи</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-20 px-5 md:px-0">
            <h3 class="text-3xl font-bold m-0 text-slate-800 scroll-mt-10" id="care">Забота без лишних хлопот<span
                    class="text-orange-600">.</span></h3>
            <p class="mt-2 block text-sm w-full md:4/5 lg:w-1/3 font-medium text-slate-500">Мы собрали все, что важно
                при
                выборе ветеринара: опытных специалистов, честный подход и удобный сервис записи.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
                <div class="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div class="flex justify-between">
                        <p class="text-lg font-bold text-slate-800">01<span class="text-orange-600">.</span></p>
                        <a href="" class="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold m-0 text-slate-800 mb-2">Опытные врачи с подтверждённой
                            квалификацией</h3>
                        <p class="text-slate-500 text-sm">Каждый специалист проходит отбор и подтверждает свою
                            квалификацию.
                            Терапевты,
                            хирурги, стоматологи, дерматологи и другие узкие специалисты с опытом от 5
                            лет.</p>
                    </div>
                </div>
                <div class="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div class=" flex justify-between">
                        <p class="text-lg font-bold text-slate-800">02<span class="text-orange-600">.</span></p>
                        <a href="" class="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold m-0 text-slate-800 mb-2">Подбор врача по направлению</h3>
                        <p class="text-slate-500 text-sm">Вам не нужно разбираться, к кому идти. Достаточно выбрать
                            направление и система автоматически подберёт свободного специалиста с нужной
                            специализацией.</p>
                    </div>
                </div>
                <div class="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div class="flex justify-between">
                        <p class="text-lg font-bold text-slate-800">03<span class="text-orange-600">.</span></p>
                        <a href="" class="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold m-0 text-slate-800 mb-2">Запись онлайн без звонков и очередей<span
                                class="text-orange-600">.</span></h3>
                        <p class="text-slate-500 text-sm">Записаться можно в любое время суток. Никаких звонков,
                            ожидания на
                            линии и утомительных разговоров, все занимает пару минут в личном кабинете.</p>
                    </div>
                </div>
                <div class="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div class="flex justify-between">
                        <p class="text-lg font-bold text-slate-800">04<span class="text-orange-600">.</span></p>
                        <a href="" class="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold m-0 text-slate-800 mb-2">История здоровья питомца в одном
                            месте</h3>
                        <p class="text-slate-500 text-sm">Каждый специалист проходит отбор и подтверждает свою
                            квалификацию.
                            Все приёмы, назначения, результаты анализов и документы хранятся в карточке питомца. Врач
                            видит полную картину, а вы не теряете важное.</p>
                    </div>
                </div>
                <div class="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div class="flex justify-between">
                        <p class="text-lg font-bold text-slate-800">05<span class="text-orange-600">.</span></p>
                        <a href="" class="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold m-0 text-slate-800 mb-2">Современное оборудование и
                            диагностика</h3>
                        <p class="text-slate-500 text-sm">Мы используем актуальные методы диагностики и лечения, чтобы
                            поставить точный диагноз и не назначать лишнего.</p>
                    </div>
                </div>
                <div class="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div class="flex justify-between">
                        <p class="text-lg font-bold text-slate-800">06<span class="text-orange-600">.</span></p>
                        <a href="" class="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold m-0 text-slate-800 mb-2">Забота без стресса для питомца</h3>
                        <p class="text-slate-500 text-sm">Спокойная атмосфера, приём без долгих ожиданий и внимательное
                            отношение к каждому животному — от кошки до экзотического питомца.</p>
                    </div>
                </div>
                <div></div>
                <div class="text-slate-500 select-none">
                <pre>
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀
⡠⠀⢄⡀⠀⣀⠀⠀⢀⣀⡴⠉⠀⠃⠀⠀⠀⠀⠀⠀
⢇⠀⠀⣿⣾⣯⣍⣽⣿⣿⣿⡤⢀⠇⠀⠀⠀⠀⠀⠀
⠀⠑⢼⣿⣿⣿⣿⣿⣿⣿⣿⣷⣷⣤⡀⠀⠀⠀⠀⠀
⠀⢸⣿⣿⣟⣻⣿⣿⣿⣭⣿⣿⣿⣿⡟⠢⡀⠀⠀⠀
⠀⢸⡏⢻⣿⢿⣿⣿⣿⡿⣿⡟⣿⠟⠀⠀⣿⣦⠀⠀
⠀⢸⠛⠮⠝⢋⠙⣻⣊⢁⠈⠚⢃⣀⣴⣾⣿⣿⣷⡀
⠀⣾⣶⣤⡠⠀⠉⠀⠈⢀⢀⣾⣿⣿⣿⣿⣿⣿⠿⣧
⠀⠿⡟⠛⠻⠷⣶⠀⣶⠟⠋⠛⣿⠗⠈⠈⠉⢠⣪⣿
⠀⠸⡈⠙⣄⡀⢸⢸⡿⣄⡦⠋⠁⠀⠀⠀⡠⣺⣿⣿
⠀⠀⠙⢢⡤⠙⠛⡏⣅⣠⠶⠖⠒⠒⠈⠁⠐⢾⣿⡏
⠀⠀⠀⠈⡄⠀⠀⠸⣿⡷⠀⠀⠀⠀⠀⢀⢠⣿⣿⠃
⠀⠀⠀⠀⠘⠦⣀⠀⣿⣷⣦⠄⠀⠀⠀⢝⣿⣿⡟⠀
⠀⠀⠀⣤⣤⣄⣊⡉⠟⠿⢿⡷⠗⠚⣲⠽⠿⠟⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀</pre>

                </div>
            </div>
        </div>
        <div class="my-20 px-5 md:px-0">
            <h3 class="text-3xl font-bold m-0 text-slate-800 scroll-mt-10" id="howTtWorks">Как это работает<span class="text-orange-600">.</span>
            </h3>
            <p class="mt-2 mb-4 block text-sm w-full md:w-4/5 font-medium text-slate-500">Четыре простых шага от
                регистрации
                до приёма.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
                <div>
                    <p class="block text-sm w-full md:w-4/5 font-medium text-slate-500">Этот блок поможет вам
                        сориентироваться на сайте и понять, с чего начать. Здесь мы коротко показываем
                        весь путь от регистрации до записи на приём, чтобы вы заранее знали, какие шаги вас ждут. Вы
                        увидите, что процесс состоит из четырёх простых этапов и не требует специальных знаний. Каждый
                        шаг
                        сопровождается коротким пояснением, поэтому вы сразу поймёте, что именно нужно сделать.</p>
                </div>
                <div class="lg:mx-auto">
                    <div class="grid grid-cols-[auto_1fr] gap-5">
                        <div class="flex flex-col items-center gap-2 ">
                            <a href="{{route('register.create')}}"
                               class="@if($isAuth) border-orange-600! text-orange-600! @endif border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                1
                            </a>
                            <div
                                class="@if($isAuth) bg-orange-600! @endif w-0.5 h-11 md:h-20 lg:h-11 bg-slate-800"></div>
                            <a href="{{route('pet.add.create')}}"
                               class=" text-slate-800 border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                2
                            </a>
                            <div class="w-0.5 h-11 md:h-20 lg:h-11 bg-slate-800"></div>
                            <a href="{{route('record.create')}}"
                               class="text-slate-800 border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                3
                            </a>
                            <div class="w-0.5 h-11 md:h-20 lg:h-11 bg-slate-800"></div>
                            <a href="{{route('record.create')}}"
                               class="text-slate-800 border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                4
                            </a>
                        </div>
                        <div class="flex flex-col items-center gap-5">
                            <div class="w-full border-1 border-slate-300 p-3">
                                <h3 class="text-lg font-bold m-0 text-slate-800 mb-1">Зарегистрируйтесь</h3>
                                <p class="text-slate-500 text-sm">Создайте аккаунт за минуту: почта и пароль.</p>
                            </div>
                            <div class="w-full border-1 border-slate-300 p-3">
                                <h3 class="text-lg font-bold m-0 text-slate-800 mb-1">Добавьте питомца</h3>
                                <p class="text-slate-500 text-sm">Укажите вид, породу, возраст — это поможет врачу
                                    подготовиться.</p>
                            </div>
                            <div class="w-full border-1 border-slate-300 p-3">
                                <h3 class="text-lg font-bold m-0 text-slate-800 mb-1">Выберите направление и врача</h3>
                                <p class="text-slate-500 text-sm">Терапия, стоматология, хирургия, дерматология и
                                    другие.</p>
                            </div>
                            <div class="w-full border-1 border-slate-300 p-3">
                                <h3 class="text-lg font-bold m-0 text-slate-800 mb-1">Запишитесь на удобное время</h3>
                                <p class="text-slate-500 text-sm">Слоты онлайн. Напомним о приёме заранее.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="my-20 px-5 md:px-0">
            <h3 class="text-3xl font-bold m-0 text-slate-800 scroll-mt-10" id="admissionDirections">Направления приема<span class="text-orange-600">.</span>
            </h3>
            <p class="mb-4 mt-2 block text-sm w-full md:w-4/5 font-medium text-slate-500">Все направления ветеринарной
                помощи в одном месте.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <p class="block text-sm w-full md:w-4/5 font-medium text-slate-500">Здоровье питомца может
                                потребовать помощи разных специалистов, и не всегда легко понять, к кому обратиться в
                                конкретной
                                ситуации. Кто-то замечает, что животное стало вялым или отказывается от еды, кто-то
                                планирует
                                плановую прививку, а кому-то нужен узкий врач по уже известному диагнозу.</p>
                        </div>
                        <div class="text-slate-500 select-none">
                            <pre>
⠀⠀⠀⠀⠠⣀⠑⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⡀⠤⡙⠄⢡⡀⠘⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠦⢹⣦⣌⢆⠀⢡⡀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⢢⠉⢻⣿⣷⡄⢳⡌⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢨⣮⣑⢤⡙⢧⡳⣌⣷⡱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠑⡭⣳⢿⣗⠻⣷⣻⣷⠷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢙⣿⣿⣟⠓⢽⣿⡟⠈⡇⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢭⠿⣿⣷⣦⣹⣇⢲⣿⢨⠃⡠⠄⠠⢄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠐⢺⣿⣶⣾⣿⣯⣿⢯⣇⡎⢄⡀⠀⢠⡬⠴⠶⠦⠤⡄
⠀⠀⠀⠀⢲⣉⣽⣶⣿⣿⣯⣿⣷⣟⢦⣣⠗⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠘⠉⣩⠵⣺⣾⣿⣿⣿⣷⣿⣻⠊⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⠪⣝⣿⣿⣿⣿⣿⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠠⠃⣔⣿⢹⣉⢉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣼⣿⣿⣿⠘⡇⣄⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣾⣿⣿⡟⣿⡀⠸⡌⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⡎⣼⡟⣿⠇⡿⡇⣥⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠹⠏⠈⡿⠀⢿⠇⠃⠳⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            </pre>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    <div
                        class="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 class="font-bold text-slate-800">01<span class="text-orange-600">.</span></h6>
                        <h6 class="font-bold text-slate-800">Терапия</h6>
                        <p class="">Осмотр, диагностика, назначения и общее наблюдение за состоянием питомца.</p>
                    </div>
                    <div
                        class="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 class="font-bold text-slate-800">02<span class="text-orange-600">.</span></h6>
                        <h6 class="font-bold text-slate-800">Вакцинация</h6>
                        <p class="">Плановые прививки, ревакцинация и подбор индивидуального графика.</p>
                    </div>
                    <div
                        class="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 class="font-bold text-slate-800">03<span class="text-orange-600">.</span></h6>
                        <h6 class="font-bold text-slate-800">Стоматология</h6>
                        <p class="">Чистка зубов, удаление зубного камня и лечение заболеваний полости рта.</p>
                    </div>
                    <div
                        class="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 class="font-bold text-slate-800">04<span class="text-orange-600">.</span></h6>
                        <h6 class="font-bold text-slate-800">Хирургия</h6>
                        <p class="">Плановые и срочные операции, стерилизация и послеоперационное наблюдение.</p>
                    </div>
                    <div
                        class="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 class="font-bold text-slate-800">05<span class="text-orange-600">.</span></h6>
                        <h6 class="font-bold text-slate-800">Дерматология</h6>
                        <p class="">Диагностика и лечение кожных заболеваний, аллергий и выпадения шерсти.</p>
                    </div>
                    <div
                        class="border-1 border-transparent border-y-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 class="font-bold text-slate-800">06<span class="text-orange-600">.</span></h6>
                        <h6 class="font-bold text-slate-800">Офтальмология</h6>
                        <p class="">Осмотр глаз, лечение воспалений и подбор терапии при нарушениях зрения.</p>
                    </div>
                    <p class="block text-sm w-full md:w-4/5 font-medium text-slate-500">Это лишь часть направлений, с
                        которыми работают наши специалисты. Полный список доступен на странице записи на приём, где вы
                        сможете выбрать нужное направление и сразу подобрать свободного врача.</p>
                </div>
            </div>
        </div>
    </div>
@endsection
