

const Header = () => {
    return (
        <header className=" text-slate-800  border-b-1 border-b-slate-500">
            <div className="container mx-auto py-4 flex items-center justify-between">

                <a href=""
                   className=" text-2xl font-bold m-0 text-shadow-slate-800">PetHealth</a>

                <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
                    <a href="" className="hover:text-orange-600 transition">Главная</a>
                    {/*<a href="{{route('admin.doctors.index')}}" className="hover:text-orange-600 transition">Доктора</a>*/}
                    {/*<a href="{{route('admin.status.index')}}" className="hover:text-orange-600 transition">История*/}
                    {/*    болезней</a>*/}
                    <a href="" className="hover:text-orange-600 transition">Записаться</a>
                    {/*<a href="{{route('pet.add.create')}}" className="hover:text-orange-600 transition">Новый питомец</a>*/}
                    <a href="" className="hover:text-orange-600 transition">История
                        болезни</a>
                </nav>

                <div className="flex items-center gap-4">
                    {/*<a href="{{route('pet.index')}}" className="text-gray-800 hover:text-orange-600 transition">Питомцы</a>*/}
                    {/*<form method="POST" action="{{route('logout')}}">*/}
                    {/*    <button*/}
                    {/*        className="border-orange-600 text-orange-600 border-1 hover:text-slate-800 hover:bg-slate-800 px-3 py-1 transition">*/}
                    {/*        Выйти*/}
                    {/*    </button>*/}
                    {/*</form>*/}
                    <a href="" className="text-gray-800 hover:text-orange-600 transition">Вход</a>
                    <a href=""
                       className="border-slate-800 border-1 hover:bg-orange-600 px-3 py-1 transition">
                        Регистрация
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Header