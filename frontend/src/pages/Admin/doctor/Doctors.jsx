
import DoctorsIntro from "../../../components/admin/doctor/DoctorsIntro.jsx";
import {useDoctors} from "../../../hooks/useDoctors.js";
import Loader from "../../../components/ui/Loader.jsx";
import CaringCard from "../../../components/main/CaringCard.jsx";
import {deleteDoctor} from "../../../api/adminDoctors.js";
import {useMemo, useState} from "react";
import Label from "../../../components/ui/Label.jsx";
import Select from "../../../components/ui/Select.jsx";
import Input from "../../../components/ui/Input.jsx";

const Doctors = () => {
    const { doctors, loading, error, reload } = useDoctors();

    const [search, setSearch] = useState("");
    const [specialization, setSpecialization] = useState("");

    const handleDelete = async (id) => {
        if (!window.confirm("Вы уверены, что хотите удалить специалиста?")) return;
        try {
            await deleteDoctor(id);
            reload();
        } catch (err) {
            alert("Ошибка при удалении: " + err.message);
        }
    };

    const specializations = useMemo(() => {
        const list = new Map();
        doctors.forEach(doc => {
            if (doc.specialization && !list.has(doc.specialization.id)) {
                list.set(doc.specialization.id, doc.specialization);
            }
        });
        return Array.from(list.values());
    }, [doctors]);

    const filteredDoctors = useMemo(() => {
        return doctors.filter((doc) => {
            const matchesName = doc.fio.toLowerCase().includes(search.toLowerCase());
            const matchesSpec = specialization ? String(doc.specialization?.id) === specialization : true;
            return matchesName && matchesSpec;
        });
    }, [doctors, search, specialization]);

    if (loading) return <Loader />;

    if (error) {
        return (
            <p className="text-danger text-sm font-medium py-4">
                Ошибка загрузки: {error}
            </p>
        );
    }

    const hasDoctors = filteredDoctors.length > 0;
    const hasActiveFilters = search || specialization;
    return (
        <div>
            <DoctorsIntro />

            <div className="border-b border-ink pb-8 mb-8 mt-4">
                <div className="flex justify-between items-center border-b border-line py-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Фильтры</span>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setSpecialization("");
                            }}
                            className="text-[10px] tracking-[0.3em] uppercase font-bold hover:text-accent hover:border-accent transition">
                            Сбросить
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col">
                        <Label htmlFor="filter-search">Поиск по ФИО</Label>
                        <Input
                            id="filter-search"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Введите имя врача.."/>
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="filter-spec">Специализация</Label>
                        <Select
                            id="filter-spec"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}>
                            <option value="">Все специализации</option>
                            {specializations.map((s) => (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
            {!hasDoctors ? (
                <div className="border border-ink/30 p-8 text-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-ink/60 mb-2">Ничего не найдено</p>
                    <p className="text-sm text-ink/80">Попробуйте изменить параметры поиска</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5">
                    {filteredDoctors.map((d) => (
                        <CaringCard
                            key={d.id}
                            doctor={d}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Doctors;