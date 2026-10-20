const SlotPicker = ({slots, value, onChange, loading, error}) => {
    if (loading) {
        return (
            <p className="text-sm">Загрузка слотов...</p>
        );
    }

    if (!slots.length) {
        return (
            <p className="text-sm">
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
                            ? "border-accent  text-accent"
                            : "border-ink hover:border-accent hover:text-accent"
                        }
                        ${error ? "border-danger" : ""}`}>
                        {slot}
                    </button>
                );
            })}
        </div>
    );
};

export default SlotPicker;