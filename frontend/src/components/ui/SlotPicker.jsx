const SlotPicker = ({slots, value, onChange, loading, error}) => {
    if (loading) {
        return (
            <p className="text-sm text-slate-500">Загрузка слотов...</p>
        );
    }

    if (!slots.length) {
        return (
            <p className="text-sm text-slate-500">
                На этот день нет свободных слотов
            </p>
        );
    }

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {slots.map((slot) => {
                const active = slot === value;
                return (
                    <button
                        key={slot}
                        type="button"
                        onClick={() => onChange(slot)}
                        className={`px-3 py-1.5 border text-sm tracking-[0.1em] transition
                        ${active
                            ? "border-orange-600  text-orange-600"
                            : "border-slate-300 text-slate-700 hover:border-orange-600 hover:text-orange-600"
                        }
                        ${error ? "border-red-600" : ""}`}>
                        {slot}
                    </button>
                );
            })}
        </div>
    );
};

export default SlotPicker;