import PetsIntro from "../components/pets/PetsIntro.jsx";
import PetsEmpty from "../components/pets/PetsEmpty.jsx";
import PetCard from "../components/pets/PetCard.jsx";
import {usePets} from "../hooks/usePets.js";
import Loader from "../components/ui/Loader.jsx";
import {useMemo, useState} from "react";
import Select from "../components/ui/Select.jsx";
import Input from "../components/ui/Input.jsx";
import Label from "../components/ui/Label.jsx";

const Pets = () => {
    const {pets, loading, error} = usePets();

    const [species, setSpecies] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const speciesOptions = useMemo(() => {
        const set = new Set()
        pets.forEach((p) => {
            if (p.species) set.add(p.species)
        })
        return Array.from(set).sort((a, b) => a.localeCompare(b, "ru"))
    }, [pets])

    const ageOptions = useMemo(() => {
        const set = new Set()
        pets.forEach((p) => {
            if (p.age !== undefined && p.age !== null) set.add(String(p.age))
        })
        return Array.from(set).sort((a, b) => Number(a) - Number(b))
    }, [pets])

    const filtered = useMemo(() =>
        pets.filter((p) => {
            if (species && p.species !== species) return false

            if (name && !p.name.toLowerCase().includes(name.toLowerCase())) {
                return false
            }
            if (age && String(p.age) !== age) return false

            return true
        }), [pets, species, name, age])

    if (loading) return <Loader/>;

    if (error) {
        return (
            <p className="text-danger text-sm font-medium py-4">
                Ошибка загрузки, попробуйте позже
            </p>
        );
    }

    const hasPets = pets.length > 0
    const hasActiveFilters = species || name || age

    return (
        <div>
            <PetsIntro/>

            {hasPets && (
                <div className="border-b border-ink pb-8 mb-8">
                    <div className="flex justify-between items-center border-b border-line py-4">
                        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Фильтры</span>
                        {hasActiveFilters && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSpecies("");
                                    setName("");
                                    setAge("");
                                }}
                                className="text-[10px] tracking-[0.3em] uppercase font-bold hover:text-accent hover:border-accent transition">
                                Сбросить
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-6">
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="flex flex-col">
                            <Label
                                htmlFor="filter-species">
                                Вид
                            </Label>
                            <Select
                                id="filter-species"
                                value={species}
                                onChange={(e) => setSpecies(e.target.value)}>
                                <option value="">Все виды</option>
                                {speciesOptions.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div className="flex flex-col">
                            <Label
                                htmlFor="filter-name">
                                Имя
                            </Label>
                            <Input
                                id="filter-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Поиск по имени.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label
                                htmlFor="filter-age">
                                Возраст
                            </Label>
                            <Select
                                id="filter-age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}>
                                <option value="">Все возрасты</option>
                                {ageOptions.map((a) => (
                                    <option key={a} value={a}>
                                        {a} лет
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            )}

            {!hasPets ? (
                <PetsEmpty/>
            ) : filtered.length === 0 ? (
                <div className="border border-slate-300 p-8 text-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-2">
                        Ничего не найдено
                    </p>
                    <p className="text-sm text-slate-600">
                        Попробуйте изменить параметры фильтра
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filtered.map(((pet) => (
                        <PetCard key={pet.id} pet={pet}/>
                    )))}
                </div>
            )}
        </div>
    );
};

export default Pets;